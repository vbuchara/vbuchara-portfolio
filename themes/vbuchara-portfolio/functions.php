<?php

require get_theme_file_path("/vendor/autoload.php");

foreach (glob(get_theme_file_path("/classes") . "/*.php") as $file){
    if(is_file($file)){
        require_once $file;
    }
};

foreach (glob(get_theme_file_path("/helpers") . "/*.php") as $file){
    if(is_file($file)){
        require_once $file;
    }
};

use VBucharaPortfolio\Helpers\DebugHelpers;
use VBucharaPortfolio\Helpers\RequestHelpers;

add_action("wp_enqueue_scripts", "vbuchara_portfolio_load_scripts");
function vbuchara_portfolio_load_scripts(){
    wp_enqueue_style(
        "vbuchara-portfolio-main-css",
        get_theme_file_uri("/build/index.css")
    );
}

add_action("after_setup_theme", "vbuchara_portfolio_after_theme_setup");
function vbuchara_portfolio_after_theme_setup(){
    add_theme_support("editor-styles");

    add_editor_style([
        "/build/index.css"
    ]);

    add_image_size("skill-icon", 150, 150, true);
    add_image_size("project-image", 350, 350, true);
    add_image_size("post-image", 350, 350, true);
}

add_action("init", "vbuchara_portfolio_init_blocks");
function vbuchara_portfolio_init_blocks(){
    /**
     * @var array{dependencies: string[], version: string}
     */
    $vendorAssets = include get_theme_file_path("/build/vendors.asset.php");
    /**
     * @var array{dependencies: string[], version: string}
     */
    $indexAssets = include get_theme_file_path("/build/index.asset.php");
    /**
     * @var string[]
     */
    $blocksToRegister = [
        "footer",
        "header",
        "section",
        "heading",
        "paragraph",
        "button",
        "image",
        "skills",
        "projects",
        "container",
        "welcome-container",
        "archive-header",
        "archive-projects",
        "archive-skills",
        "archive-posts",
        "experiences",
    ];

    wp_register_script(
        'react-jsx-runtime',
        get_theme_file_uri("/assets/js/react-jsx-runtime.js"),
        ['react'],
        '18.3.0',
        true
    );
    wp_register_script(
        'vbuchara-portfolio-blocks-vendor',
        get_theme_file_uri("/build/vendors.js"),
        isset($vendorAssets['dependencies']) ? $vendorAssets['dependencies'] : [],
        isset($vendorAssets['version']) ? $vendorAssets["version"] : null,
        true
    );
    wp_enqueue_script(
        'vbuchara-portfolio-index',
        get_theme_file_uri("/build/index.js"),
        array_merge(
            isset($indexAssets['dependencies']) ? $indexAssets['dependencies'] : [],
            ['vbuchara-portfolio-blocks-vendor']
        ),
        isset($indexAssets['version']) ? $indexAssets["version"] : null,
        true
    );
    
    foreach($blocksToRegister as $blockToRegister) {
        register_block_type_from_metadata(get_theme_file_path("/build/blocks/$blockToRegister"));
    }
}

add_action("enqueue_block_editor_assets", 'vbuchara_portfolio_enqueue_block_editor_assets');
function vbuchara_portfolio_enqueue_block_editor_assets(){
    /**
     * @var array{dependencies: string[], version: string}
     */
    $editorStylesAssets = include get_theme_file_path("/build/editor-styles.asset.php");
    wp_enqueue_style(
        'vbuchara-portfolio-editor-styles',
        get_theme_file_uri("/build/editor-styles.css"),
        isset($editorStylesAssets['dependencies']) ? $editorStylesAssets['dependencies'] : [],
        isset($editorStylesAssets['version']) ? $editorStylesAssets['version'] : null
    );
}

add_action('pre_get_posts', 'vbuchara_portfolio_adjust_queries', 99, 1);
function vbuchara_portfolio_adjust_queries(WP_Query $query){
    $isMainQuery = $query->is_main_query();
    $isNotInAdmin = !is_admin();
    $isForPosts = $query->is_posts_page;

    if($isMainQuery && $isNotInAdmin && $isForPosts){
        $query->set("orderby", ["date" => "desc", "title" => "asc"]);
    }

    if($isMainQuery && $isNotInAdmin && $query->is_post_type_archive('project')){
        $query->set("posts_per_page", -1);
    }

    if($isMainQuery && $isNotInAdmin && $query->is_post_type_archive('skill')){
        $query->set("posts_per_page", -1);
    }
}

add_filter('block_categories_all', 'vbuchara_portfolio_blocks_category');
function vbuchara_portfolio_blocks_category(array $categories){
    $vbucharaPortfolioCategory = [
        'slug' => 'vbuchara-portfolio',
        'title' => 'My Portfolio'
    ];

    return [$vbucharaPortfolioCategory, ...$categories];
}

// -- /Rest Filters --
add_filter("rest_post_query", "vbuchara_portfolio_adjust_rest_query", 10, 2);
add_filter("rest_skill_query", "vbuchara_portfolio_adjust_rest_query", 10, 2);
add_filter("rest_project_query", "vbuchara_portfolio_adjust_rest_query", 10, 2);
add_filter("rest_experience_query", "vbuchara_portfolio_adjust_rest_query", 10, 2);
function vbuchara_portfolio_adjust_rest_query(array $args, WP_REST_Request $request){
    $metaQuery = RequestHelpers::get_meta_queries($request);
    $orderby = RequestHelpers::get_orderby($request);

    $newArgs = [
        'meta_key'   => $request->get_param('meta_key'),
        'meta_value' => $request->get_param('meta_value'),
        'meta_query' => $metaQuery,
        'author' => $request->get_param("author"),
        'orderby' => $orderby,
    ];

    return array_merge($args, $newArgs);
}

add_filter('rest_post_collection_params', 'vbuchara_portfolio_adjust_rest_collection_params', 10);
add_filter('rest_skill_collection_params', 'vbuchara_portfolio_adjust_rest_collection_params', 10);
add_filter('rest_project_collection_params', 'vbuchara_portfolio_adjust_rest_collection_params', 10);
add_filter('rest_experience_collection_params', 'vbuchara_portfolio_adjust_rest_collection_params', 10);
function vbuchara_portfolio_adjust_rest_collection_params(array $params){
    $params['orderby']['enum'][] = 'meta_value';
	return $params;
}

add_filter("rest_prepare_post_type", "vbuchara_portfolio_adjust_rest_post_type", 10, 2);
function vbuchara_portfolio_adjust_rest_post_type(
    WP_REST_Response $response, 
    WP_Post_Type $object
){
    if($object->has_archive){
        $data = $response->get_data();
        $newData = array_merge($data, [
            "archive_link" => get_post_type_archive_link($object->name)
        ]);
        
        $response->set_data($newData);
    }

    return $response;
}
// -- Rest Filters/ --

// -- /ACF Filters --
add_filter('acf/rest/format_value_for_rest/name=skill_icon', 'vbuchara_portfolio_format_value_skill_icon', 10, 5);
/**
 * @param mixed      $value_formatted The formatted value.
 * @param string|int $post_id The post ID of the current object.
 * @param array      $field The field array.
 * @param mixed      $value The raw/unformatted value.
 * @param string     $format The format applied to the field value.
 */
function vbuchara_portfolio_format_value_skill_icon($value_formatted, $post_id, $field, $value, $format){
    $svgSource = get_attached_file($value);

    if(!$svgSource) return null;

    return file_get_contents($svgSource);
}
add_filter('acf/rest/format_value_for_rest/type=image', 'vbuchara_portfolio_format_value_image', 10, 5);
/**
 * @param mixed      $value_formatted The formatted value.
 * @param string|int $post_id The post ID of the current object.
 * @param array      $field The field array.
 * @param mixed      $value The raw/unformatted value.
 * @param string     $format The format applied to the field value.
 */
function vbuchara_portfolio_format_value_image($value_formatted, $post_id, $field, $value, $format){
    if(is_numeric($value) && wp_attachment_is_image($value)){
        $imageSizesAvailable = get_intermediate_image_sizes();

        $imageSizesInitial = ["source" => wp_get_attachment_url($value)];

        $imageSizes = array_reduce($imageSizesAvailable, function($result, $imageSizeAvailable) use ($value){
            return array_merge(
                $result,
                [$imageSizeAvailable => wp_get_attachment_image_url($value, $imageSizeAvailable)]
            );
        }, $imageSizesInitial);

        return [
            "id" => (int) $value,
            "size_urls" => $imageSizes,
            "alt" => get_post_meta($value, "_wp_attachment_image_alt", true)
        ];
    }   

    return !empty($value_formatted) ? $value_formatted : null;
}
// -- ACF Filters/ --

add_filter("render_block", "vbuchara_portfolio_render_block", 10, 3);
function vbuchara_portfolio_render_block(
    string $block_content, array $block, WP_Block $instance
){
    $isSiteHeaderPart = isset($block["blockName"]) 
        && $block["blockName"] === "core/template-part"
        && $block["attrs"]["slug"] === "site-header";
    $isSiteFooterPart = isset($block["blockName"]) 
        && $block["blockName"] === "core/template-part"
        && $block["attrs"]["slug"] === "site-footer";

    $html5 = new Masterminds\HTML5();

    if($isSiteHeaderPart){
        $headerDocument = $html5->loadHTML($block_content);
        $headerWrapper = $headerDocument->getElementsByTagName("header")->item(0);

        if(!$headerWrapper) return $block_content;

        $childNodes = iterator_to_array($headerWrapper->childNodes);
        $innerHtml = array_reduce($childNodes, function(string $result, DOMNode $node) use ($headerDocument){
            return $result . $headerDocument->saveHTML($node);
        }, "");

        return $innerHtml;
    }

    if($isSiteFooterPart){
        $footerDocument = $html5->loadHTML($block_content);
        $footerWrapper = $footerDocument->getElementsByTagName("footer")->item(0);

        if(!$footerWrapper) return $block_content;

        $childNodes = iterator_to_array($footerWrapper->childNodes);
        $innerHtml = array_reduce($childNodes, function(string $result, DOMNode $node) use ($footerDocument){
            return $result . $footerDocument->saveHTML($node);
        }, "");

        return $innerHtml;
    }

    return $block_content;
}

add_filter("excerpt_length", "vbuchara_portfolio_excerpt_length", 20);
function vbuchara_portfolio_excerpt_length(){
    return 20;
}

add_filter("excerpt_more", "vbuchara_portfolio_excerpt_more", 10);
function vbuchara_portfolio_excerpt_more(){
    return "...";
}