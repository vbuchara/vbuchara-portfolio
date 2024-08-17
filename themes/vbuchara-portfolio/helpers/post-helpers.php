<?php

namespace VBucharaPortfolio\Helpers;

use VBucharaPortfolio\Helpers\ArrayHelpers;

use Ds\Map;
use Exception;
use WP_Post;

class PostHelpers {

    private static $skillLevelLabels = null;

    /**
     * @return Map<string, string>
     */
    public static function get_skill_level_labels(){
        if(!empty(self::$skillLevelLabels)) return self::$skillLevelLabels;

        $skillLevelLabels = new Map();

        $skillLevelLabels->put("1_beginner", "Beginner");
        $skillLevelLabels->put("2_intermediary", "Intermediary");
        $skillLevelLabels->put("3_advanced", "Advanced");

        self::$skillLevelLabels = $skillLevelLabels;

        return self::$skillLevelLabels;
    }

    public static function get_skill_level_label(WP_Post $skillPost) {
        self::assert_post_type($skillPost, "skill");

        /**
         * @var string
         */
        $skillLevel = get_field("skill_level", $skillPost->ID);

        return self::get_skill_level_labels()->get($skillLevel, "Unknown");
    }

    /**
     * @param \WP_Post $projectPost
     * @param string|null $defaultImageUrl
     * @return array{
     *  url: string,
     *  alt: string
     * }
     */
    public static function get_project_image(WP_Post $projectPost, string $defaultImageUrl = null){
        self::assert_post_type($projectPost, "project");

        $defaultImage = empty($defaultImageUrl) 
            ? get_theme_file_uri("/assets/images/project-default-image.png") 
            : $defaultImageUrl;

        $projectImageId = get_field("project_image", $projectPost->ID);
                
        $projectImagePossibleSrc = wp_get_attachment_image_url($projectImageId, "project-image");
        $projectImageSrc = !empty($projectImagePossibleSrc) 
            ? $projectImagePossibleSrc 
            : $defaultImage;

        /** @var string */
        $projectImagePossibleAlt = get_post_meta($projectImageId, "_wp_attachment_image_alt", true);
        $projectImageAlt = !empty($projectImagePossibleAlt) 
            ? $projectImagePossibleAlt 
            : "No image for the project provided";

        return [
            "url" => $projectImageSrc,
            "alt" => $projectImageAlt
        ];
    }

    public static function get_project_link(WP_Post $projectPost){
        self::assert_post_type($projectPost, "project");

        $projectsArchive = get_post_type_archive_link("project");
        $formattedProjectsArchive = str_ends_with($projectsArchive, "/")
            ? rtrim($projectsArchive, "/")
            : $projectsArchive;

        $projectLink = !empty($formattedProjectsArchive) 
            ? "$formattedProjectsArchive#$projectPost->post_name"
            : "";

        return $projectLink;
    }

    public static function get_skill_link(WP_Post $skillPost){
        self::assert_post_type($skillPost, "skill");

        $skillsArchive = get_post_type_archive_link("skill");
        $formattedSkillsArchive = str_ends_with($skillsArchive, "/")
            ? rtrim($skillsArchive, "/")
            : $skillsArchive;

        $skillLink = !empty($formattedSkillsArchive) 
           ? "$formattedSkillsArchive#$skillPost->post_name"
            : "";

        return $skillLink;
    }

    /**
     * @param WP_Post[] $posts
     * @param int[] $idsToSortBy
     * @return WP_Post[]
     */
    public static function sort_posts_by_id_array(array $posts, array $idsToSortBy){
        return ArrayHelpers::array_sort($posts, function(
            WP_Post $leftPost, WP_Post $rightPost
        ) use ($idsToSortBy): int{
            $leftPostIndex = array_search($leftPost->ID, $idsToSortBy);
            $rightPostIndex = array_search($rightPost->ID, $idsToSortBy);
    
            return $leftPostIndex - $rightPostIndex;
        });
    }

    private static function assert_post_type(WP_Post $post, string $postType){
        if(get_post_type($post) !== $postType){
            throw new Exception("Invalid post type. Post type must be '$postType'.");
        };
    }
}