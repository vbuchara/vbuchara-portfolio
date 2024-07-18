<?php

require get_theme_file_path("/vendor/autoload.php");

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
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/footer/block.json"));
    register_block_type_from_metadata(get_theme_file_path("/build/blocks/header/block.json"));
}

add_filter('block_categories_all', 'vbuchara_portfolio_blocks_category');
function vbuchara_portfolio_blocks_category(array $categories){
    $vbucharaPortfolioCategory = [
        'slug' => 'vbuchara-portfolio',
        'title' => 'My Portfolio'
    ];

    return [$vbucharaPortfolioCategory, ...$categories];
}