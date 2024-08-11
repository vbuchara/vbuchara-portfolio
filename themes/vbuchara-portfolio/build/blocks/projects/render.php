<?php 
    use VBucharaPortfolio\Helpers\PostHelpers;

    /**
     * @var array{
     *  projectsQuantity?: int,
     *  showSpecificProjects: boolean,
     *  projectsIdsToShow: int[],
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "projectsQuantity" => -1,
        "showSpecificProjects" => false,
        "projectsIdsToShow" => []
    ];

    /**
     * @var array{
     *  projectsQuantity?: int,
     *  showSpecificProjects: boolean,
     *  projectsIdsToShow: int[],
     * }
     */
    $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes);

    $projectsQuery = new WP_Query([
        "post_type" => "project",
        "posts_per_page" => $attributesWithDefaults["projectsQuantity"],
        "post__in" => $attributesWithDefaults["showSpecificProjects"] &&!empty($attributesWithDefaults["projectsIdsToShow"]) 
           ? $attributesWithDefaults["projectsIdsToShow"] 
            : null,
    ]);

    $projects = PostHelpers::sort_posts_by_id_array(
        $projectsQuery->get_posts(),
        $attributesWithDefaults["projectsIdsToShow"]
    );

    $defaultProjectImage = get_theme_file_uri("/assets/images/project-default-image.png");

    $projectsContext = wp_interactivity_data_wp_context([
        "mainDivMeasure" => null,
        "cardsDivElement" => null,
        "cardsDivMeasure" => null,
        "activeScrollLeft" => false,
        "activeScrollRight" => false,
        "handleOnScroll" => null
    ], "vbuchara-portfolio/projects");
?>
<div 
    class="portfolio-projects"
    data-wp-interactive="vbuchara-portfolio/projects"
    data-wp-run="callbacks.onRunMainDiv"
    data-wp-class--portfolio-projects--with-scroll="callbacks.shouldActiveScroll"
    <?= $projectsContext ?>
>
    <button
        type="button"
        class="portfolio-projects__scroll-left"
        data-wp-class--portfolio-projects__scroll-left--disabled="!context.activeScrollLeft"
        data-wp-bind--disabled="!context.activeScrollLeft"
        data-wp-on--click="actions.handleScrollLeft"
    ><?= "<" ?></button>
    <div 
        class="portfolio-projects__cards"
        data-wp-run="callbacks.onRunCardsDiv"
        data-wp-on--scroll="context.handleOnScroll"
    >
        <?php foreach($projects as $project): ?>
            <?php 
                $projectIdHtml = "portfolio-projects__card-$project->post_name";

                $projectImage = PostHelpers::get_project_image($project, $defaultProjectImage);
                $projectLink = PostHelpers::get_project_link($project);

                $projectCardContext = wp_interactivity_data_wp_context([
                    "scrollAnimationController" => null,
                    "scrollStartTimeout" => null,
                    "cardTitleLinkTextOverflow" => false,
                ], "vbuchara-portfolio/projects");
            ?>
            <div 
                id="<?= $projectIdHtml ?>"
                class="portfolio-projects__card"
                data-wp-key="<?= $project->ID ?>"
                <?= $projectCardContext ?>
            >
                <img
                    class="portfolio-projects__card-image"
                    src="<?= $projectImage["url"] ?>"
                    alt="<?= $projectImage['alt'] ?>"
                />
                <span 
                    class="portfolio-projects__card-title"
                    data-wp-init="callbacks.onInitCardTitle"
                    data-wp-on--focus="actions.startScrollLeftCardTitle"
                    data-wp-on--blur="actions.revertScrollCardTitle"
                    data-wp-on--mouseover="actions.startScrollLeftCardTitle"
                    data-wp-on--mouseleave="actions.revertScrollCardTitle"
                >
                    <a 
                        class="portfolio-projects__card-title-link"
                        href="<?= $projectLink ?>"
                        data-wp-style--text-overflow="context.cardTitleLinkTextOverflow"
                    >
                        <?= get_the_title($project) ?>
                    </a>
                </span>
            </div>
        <?php endforeach; ?>
    </div>
    <button
        type="button"
        class="portfolio-projects__scroll-right"
        data-wp-class--portfolio-projects__scroll-right--disabled="!context.activeScrollRight"
        data-wp-bind--disabled="!context.activeScrollRight"
        data-wp-on--click="actions.handleScrollRight"
    ><?= ">" ?></button>
</div>