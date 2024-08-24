<?php 
    use VBucharaPortfolio\Helpers\PostHelpers;
    use VBucharaPortfolio\Helpers\SvgHelpers;

    /**
     * @var array{
     *  experiencesType?: string,
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "experienceType" => null
    ];

    /**
     * @var array{
     *  experiencesType: string | null,
     * }
     */
    $attributesWithDefaults = array_merge_recursive($defaultAttributes, $attributes);

    $experiencesQuery = new WP_Query([
        "post_type" => "experience",
        "posts_per_page" => -1,
        "meta_query" => $attributesWithDefaults["experiencesType"] ? [
            [
                "key" => "type",
                "compare" => "LIKE",
                "value" => $attributesWithDefaults["experiencesType"]
            ]
        ] : null
    ]);
    $experiences = $experiencesQuery->get_posts();

    $html5 = new Masterminds\HTML5();
?>
<div class="portfolio-experiences">
    <?php foreach($experiences as $experience): ?>
        <?php 
            /** @var int[] */
            $developedSkillsArray = get_field("developed_skills", $experience->ID);
            $skillsQuery = new WP_Query([
                "post_type" => "skill",
                "posts_per_page" => -1,
                "post__in" => $developedSkillsArray
            ]);
            $skills = PostHelpers::sort_posts_by_id_array($skillsQuery->get_posts(), $developedSkillsArray);   
            
            /** @var string */
            $experienceType = get_field("type", $experience->ID);
            /** @var string */
            $experiencePeriodStart = get_field("period_start", $experience->ID);
            /** @var string */
            $experiencePeriodEnd = get_field("period_end", $experience->ID);
            /** @var string */
            $experienceDescription = get_field("description", $experience->ID);
        ?>
        <?php if($experienceType === "work"): ?>
            <?php 
                /** @var string */
                $experienceCompany = get_field("company", $experience->ID);    
            ?>
            <div 
                class="portfolio-experiences__item portfolio-experiences__item--work"
                id="<?= $experience->post_name ?>"
            >
                <h3 class="portfolio-experiences__item-title">
                    <?= wp_strip_all_tags(get_the_title($experience)) ?>
                </h3>
                <h4 class="portfolio-experiences__item-subtitle">
                    Period: <?= $experiencePeriodStart ?> to <?= $experiencePeriodEnd ?>
                </h4>
                <h4 class="portfolio-experiences__item-subtitle">
                    Company: <?= $experienceCompany ?>
                </h4>
                <p class="portfolio-experiences__item-description">
                    <?= $experienceDescription ?>
                </p>
                <div class="portfolio-experiences__item-skills">
                    <h5 class="portfolio-experiences__item-skills-title">Skills for this project:</h5>
                    <ul class="portfolio-experiences__item-skills-list">
                        <?php foreach($skills as $skill): ?>
                            <?php 
                                $skillIcon = SvgHelpers::get_svg_element_from_media(get_field("skill_icon", $skill->ID));
                                if(empty($skillIcon)) continue;

                                $skillIcon->setAttribute("class", "portfolio-experiences__item-skills-icon");
                                $skillIcon->setAttribute("fill", "currentColor");
                                $skillIcon->setAttribute("color", "inherit");

                                $skillTitle = wp_strip_all_tags(get_the_title($skill));
                                $skillLink = "#$skill->post_name";    
                            ?>
                            <li
                                class="portfolio-experiences__item-skills-item"
                            >
                                <a 
                                    class="portfolio-experiences__item-skills-link"
                                    href="<?= $skillLink ?>"
                                    title="<?= $skillTitle ?>"
                                >
                                    <?= $html5->saveHTML($skillIcon) ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
        <?php if($experienceType === "educational"): ?>
            <?php 
                /** @var string */
                $experienceInstitution = get_field("institution", $experience->ID);    
            ?>
            <div 
                class="portfolio-experiences__item portfolio-experiences__item--educational"
                id="<?= $experience->post_name ?>"
            >
                <h3 class="portfolio-experiences__item-title">
                    <?= wp_strip_all_tags(get_the_title($experience)) ?>
                </h3>
                <h4 class="portfolio-experiences__item-subtitle">
                    Period: <?= $experiencePeriodStart ?> to <?= $experiencePeriodEnd ?>
                </h4>
                <h4 class="portfolio-experiences__item-subtitle">
                    Institution: <?= $experienceInstitution ?>
                </h4>
                <p class="portfolio-experiences__item-description">
                    <?= $experienceDescription ?>
                </p>
                <div class="portfolio-experiences__item-skills">
                    <h5 class="portfolio-experiences__item-skills-title">Skills for this project:</h5>
                    <ul class="portfolio-experiences__item-skills-list">
                        <?php foreach($skills as $skill): ?>
                            <?php 
                                $skillIcon = SvgHelpers::get_svg_element_from_media(get_field("skill_icon", $skill->ID));
                                if(empty($skillIcon)) continue;

                                $skillIcon->setAttribute("class", "portfolio-experiences__item-skills-icon");
                                $skillIcon->setAttribute("fill", "currentColor");
                                $skillIcon->setAttribute("color", "inherit");

                                $skillTitle = wp_strip_all_tags(get_the_title($skill));
                                $skillLink = "#$skill->post_name";    
                            ?>
                            <li
                                class="portfolio-experiences__item-skills-item"
                            >
                                <a 
                                    class="portfolio-experiences__item-skills-link"
                                    href="<?= $skillLink ?>"
                                    title="<?= $skillTitle ?>"
                                >
                                    <?= $html5->saveHTML($skillIcon) ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
</div>