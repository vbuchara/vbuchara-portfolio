<?php

foreach (glob(dirname(__FILE__) . "/helpers/*.php") as $file){
    if(is_file($file)){
        require_once $file;
    }
};

use MuPlugins\Helpers\SvgHelpers;

add_action("init", "portfolio_custom_types");
function portfolio_custom_types() {
    portfolio_register_skill_type();
    portfolio_register_project_type();
    portfolio_register_experience_type();
}

function portfolio_register_skill_type(){
    $skillIcon = SvgHelpers::get_svg_base64("skill");

    register_post_type("skill", [
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => $skillIcon,
        'supports' => [
            'title',
        ],
        'capability_type' => 'skill',
        'map_meta_cap' => true,
        'rewrite' => [
            'slug' => 'skills'
        ],
        'labels' => [
            'name' => 'Skills',
            'singular_name' => 'Skill',
            'add_new_item' => 'Add New Skill',
            'add_new' => 'Add New Skill',
            'edit_item' => 'Edit Skill',
            'all_items' => "All Skills",
        ]
    ]);
}

function portfolio_register_project_type(){
    $projectIcon = SvgHelpers::get_svg_base64("project");

    register_post_type("project", [
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => $projectIcon,
        'supports' => [
            'title',
        ],
        'capability_type' => 'project',
        'map_meta_cap' => true,
        'rewrite' => [
            'slug' => 'projects'
        ],
        'labels' => [
            'name' => 'Projects',
            'singular_name' => 'Project',
            'add_new_item' => 'Add New Project',
            'add_new' => 'Add New Project',
            'edit_item' => 'Edit Project',
            'all_items' => "All Projects",
        ]
    ]);
}

function portfolio_register_experience_type(){
    $experienceIcon = SvgHelpers::get_svg_base64("experience");

    register_post_type("experience", [
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => $experienceIcon,
        'supports' => [
            'title',
        ],
        'capability_type' => 'experience',
        'map_meta_cap' => true,
        'rewrite' => [
            'slug' => 'experiences'
        ],
        'labels' => [
            'name' => 'Experiences',
            'singular_name' => 'Experience',
            'add_new_item' => 'Add New Experience',
            'add_new' => 'Add New Experience',
            'edit_item' => 'Edit Experience',
            'all_items' => "All Experiences",
        ]
    ]);
}