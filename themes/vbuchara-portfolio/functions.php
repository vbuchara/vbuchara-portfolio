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

    add_image_size("skill-icon", 150, 150, false);
    add_image_size("project-image", 350, 350, false);
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
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/footer"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/header"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/section"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/blob-container"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/heading"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/paragraph"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/button"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/image"));
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

add_filter('block_categories_all', 'vbuchara_portfolio_blocks_category');
function vbuchara_portfolio_blocks_category(array $categories){
    $vbucharaPortfolioCategory = [
        'slug' => 'vbuchara-portfolio',
        'title' => 'My Portfolio'
    ];

    return [$vbucharaPortfolioCategory, ...$categories];
}