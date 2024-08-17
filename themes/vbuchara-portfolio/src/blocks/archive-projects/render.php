<?php 
    /**
     * @var WP_Post[] $posts
     */
    global $posts;

    use VBucharaPortfolio\Helpers\DebugHelpers;
    use VBucharaPortfolio\Helpers\PostHelpers;
    use VBucharaPortfolio\Helpers\SvgHelpers;

    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultProjectImage = get_theme_file_uri("/assets/images/project-default-image.png");

    $html5 = new Masterminds\HTML5();

    $githubIcon = SvgHelpers::get_svg_element("github");
    $githubIcon->setAttribute("fill", "currentColor");

    $siteIcon = SvgHelpers::get_svg_element("site");
    $siteIcon->setAttribute("color", "inherit");

    $archiveProjectsContext = wp_interactivity_data_wp_context([], "vbuchara-portfolio/archive-projects");
?>
<div 
    class="portfolio-archive-projects"
    data-wp-interactive="vbuchara-portfolio/archive-projects"
    <?= $archiveProjectsContext ?>
>
    <?php foreach($posts as $project): ?>
        <?php 
            // Project Info
            $projectImage = PostHelpers::get_project_image($project, $defaultProjectImage);
            /** @var string */
            $projectDescription = get_field("description", $project->ID);
            $projectTitle = wp_strip_all_tags(get_the_title($project));

            // Project Skills
            /** @var int[] */
            $developedSkillsArray = get_field("developed_skills", $project->ID);
            $skillsQuery = new WP_Query([
                "post_type" => "skill",
                "posts_per_page" => -1,
                "post__in" => $developedSkillsArray
            ]);
            $skills = PostHelpers::sort_posts_by_id_array($skillsQuery->get_posts(), $developedSkillsArray);

            // Project Links
            /** @var string|false */
            $projectGithubLink = get_field("project_github_link", $project->ID);
            /** @var string|false */
            $projectSiteLink = get_field("project_site_link", $project->ID);

            // Project Context
            $projectContext = wp_interactivity_data_wp_context([
                "shouldExpandInfo" => false,
                "shouldExpandSkills" => false,
                "isInfoOverflowing" => false,
                "isSkillsOverflowing" => false,
                "isProjectLinksIntersecting" => false,
            ], "vbuchara-portfolio/archive-projects");
            
            $projectLinksContext = wp_interactivity_data_wp_context([
                "shouldAnimate" => false,
                "repeatAnimationTimeout" => null,
            ], "vbuchara-portfolio/archive-projects");

            // Project Icons
            $openEyeIcon = SvgHelpers::get_svg_element("eye-open");
            $closedEyeIcon = SvgHelpers::get_svg_element("eye-closed");
            
            $openEyeIcon->setAttribute("hidden", "true");
            $openEyeIcon->setAttribute("color", "currentColor");

            $closedEyeIcon->setAttribute("color", "currentColor");
        ?>
        <div 
            id="<?= $project->post_name ?>"
            class="portfolio-archive-projects__item"
            data-wp-run="callbacks.onRunProjectItem"
            data-wp-key="<?= $project->ID ?>"
            <?= $projectContext ?>
        >
            <img
                class="portfolio-archive-projects__item-image"
                src="<?= $projectImage["url"] ?>"
                alt="<?= $projectImage["alt"] ?>"
            />
            <div class="portfolio-archive-projects__item-content">
                <div 
                    class="portfolio-archive-projects__item-info"
                    data-wp-class--portfolio-archive-projects__item-info--expanded="context.shouldExpandInfo"
                >
                    <h4 class="portfolio-archive-projects__item-title">
                        <?= $projectTitle ?>
                    </h4>
                    <button 
                        class="portfolio-archive-projects__item-expand"
                        data-wp-class--portfolio-archive-projects__item-expand--visible="callbacks.shouldExpandInfoBeVisible"
                        data-wp-class--portfolio-archive-projects__item-expand--active="context.shouldExpandInfo"
                        data-wp-on--click="actions.onClickInfoButtonExpand"
                    >
                        <?php
                            $openEyeIcon->setAttribute("data-wp-bind--hidden", "!context.shouldExpandInfo");
                            $closedEyeIcon->setAttribute("data-wp-bind--hidden", "context.shouldExpandInfo");
                        ?>
                        <?= $html5->saveHTML($openEyeIcon) ?>
                        <?= $html5->saveHTML($closedEyeIcon) ?>
                    </button>
                    <p 
                        class="portfolio-archive-projects__item-description"
                    >
                        <?= $projectDescription ?>
                    </p>
                </div>
                <div 
                    class="portfolio-archive-projects__item-skills"
                    data-wp-class--portfolio-archive-projects__item-skills--expanded="context.shouldExpandSkills"
                >
                    <h5 class="portfolio-archive-projects__item-skills-title">Skills for this project:</h5>
                    <button 
                        class="portfolio-archive-projects__item-expand"
                        data-wp-class--portfolio-archive-projects__item-expand--visible="callbacks.shouldExpandSkillsBeVisible"
                        data-wp-class--portfolio-archive-projects__item-expand--active="context.shouldExpandSkills"
                        data-wp-on--click="actions.onClickSkillsButtonExpand"
                    >
                        <?php
                            $openEyeIcon->setAttribute("data-wp-bind--hidden", "!context.shouldExpandSkills");
                            $closedEyeIcon->setAttribute("data-wp-bind--hidden", "context.shouldExpandSkills");
                        ?>
                        <?= $html5->saveHTML($openEyeIcon) ?>
                        <?= $html5->saveHTML($closedEyeIcon) ?>
                    </button>
                    <ul 
                        class="portfolio-archive-projects__item-skills-list"
                    >
                        <?php foreach($skills as $skill): ?>
                            <?php 
                                $skillIcon = SvgHelpers::get_svg_element_from_media(get_field("skill_icon", $skill->ID));
                                if(empty($skillIcon)) continue;

                                $skillIcon->setAttribute("class", "portfolio-archive-projects__item-skills-icon");
                                $skillIcon->setAttribute("fill", "currentColor");
                                $skillIcon->setAttribute("color", "inherit");

                                $skillTitle = wp_strip_all_tags(get_the_title($skill));
                                $skillLink = PostHelpers::get_skill_link($skill);
                            ?>
                            <li
                                data-wp-key="<?= $skill->ID ?>"
                                class="portfolio-archive-projects__item-skills-item"
                            >
                                <a 
                                    class="portfolio-archive-projects__item-skills-link"
                                    title="<?= $skillTitle ?>"
                                    href="<?= $skillLink ?>"
                                >
                                    <?= $html5->saveHTML($skillIcon) ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div 
                    class="portfolio-archive-projects__item-links"
                >
                    <?php if(!empty($projectGithubLink)): ?>
                        <a
                            href="<?= $projectGithubLink ?>"
                            target="_blank"
                            rel="noopener"
                            title="Project Github Repository"
                            class="portfolio-archive-projects__item-links-link"
                            data-wp-class--portfolio-archive-projects__item-links-link--animate="context.shouldAnimate"
                            data-wp-run="callbacks.onRunProjectLink"
                            data-wp-on--animationend="actions.onAnimationEndProjectLink"
                            <?= $projectLinksContext ?>
                        >
                            <?php 
                                $githubIcon->setAttribute("class", "portfolio-archive-projects__item-links-icon"); 
                            ?>
                            <?= $html5->saveHTML($githubIcon) ?>
                        </a>
                    <?php endif; ?>
                    <?php if(!empty($projectSiteLink)): ?>
                        <a
                            href="<?= $projectSiteLink ?>"
                            target="_blank"
                            rel="noopener"
                            title="Project Site"
                            class="portfolio-archive-projects__item-links-link"
                            data-wp-class--portfolio-archive-projects__item-links-link--animate="context.shouldAnimate"
                            data-wp-run="callbacks.onRunProjectLink"
                            data-wp-on--animationend="actions.onAnimationEndProjectLink"
                            <?= $projectLinksContext ?>
                        >
                            <?php 
                                $siteIcon->setAttribute("class", "portfolio-archive-projects__item-links-icon"); 
                            ?>
                            <?= $html5->saveHTML($siteIcon) ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    <?php endforeach;?>
</div>