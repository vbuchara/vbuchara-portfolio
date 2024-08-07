<?php
    use VBucharaPortfolio\Helpers\DebugHelpers;
    use VBucharaPortfolio\Helpers\SvgHelpers;
    use VBucharaPortfolio\Helpers\ArrayHelpers;
    use VBucharaPortfolio\Helpers\PostHelpers;

    /**
     * @var array{
     *  skillsQuantity?: integer,
     *  showSpecificSkills: boolean,
     *  skillsIdsToShow: integer[],
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "skillsQuantity" => -1,
        "showSpecificSkills" => false,
        "skillsIdsToShow" => [],
    ];

    /**
     * @var array{
     *  skillsQuantity?: integer,
     *  showSpecificSkills: boolean,
     *  skillsIdsToShow: integer[],
     * }
     */
    $attributesWithDefault = array_replace_recursive($defaultAttributes, $attributes);

    $skillsQuery = new WP_Query([
        "post_type" => "skill",
        "posts_per_page" => $attributesWithDefault['skillsQuantity'],
        "post__in" => $attributesWithDefault['showSpecificSkills'] && !empty($attributesWithDefault['skillsIdsToShow']) 
            ? $attributesWithDefault['skillsIdsToShow'] 
            : null,
    ]);

    /** @var WP_Post[] */
    $skills = ArrayHelpers::array_sort($skillsQuery->get_posts(), function(
        WP_Post $leftSkill, WP_Post $rightSkill
    ) use ($attributesWithDefault): int{
        $leftSkillIndex = array_search($leftSkill->ID, $attributesWithDefault['skillsIdsToShow']);
        $rightSkillIndex = array_search($rightSkill->ID, $attributesWithDefault['skillsIdsToShow']);

        return $leftSkillIndex - $rightSkillIndex;
    });

    $html5 = new Masterminds\HTML5();

    $folderIcon = SvgHelpers::get_svg_element("folder");
    $folderIcon->setAttribute("class", "portfolio-skills__card-back-icon");
    $folderIcon->setAttribute("fill", "currentColor");
?>
<div class="portfolio-skills">
    <?php foreach($skills as $skill): ?>
    <?php
        $iconSvg = SvgHelpers::get_svg_element_from_media(get_field("skill_icon", $skill->ID));
        if(empty($iconSvg)) continue;

        $iconSvg->setAttribute("class", "portfolio-skills__card-front-icon");
        $iconSvg->setAttribute("fill", "currentColor");
    ?>
        <div 
            class="portfolio-skills__card portfolio-skills__card--animated"
        >
            <div class="portfolio-skills__card-front">
                <?= $html5->saveHTML($iconSvg) ?>
                <h3 class="portfolio-skills__card-front-title">
                    <?= get_the_title($skill) ?>
                </h3>
            </div>
            <div class="portfolio-skills__card-back">
                <h3 class="portfolio-skills__card-back-title">
                    Level: <?= PostHelpers::get_skill_level_label($skill) ?>
                </h3>
                <a 
                    class="portfolio-skills__card-back-link"
                    href="/"
                >
                    <?= $html5->saveHTML($folderIcon) ?>
                    See Projects
                </a>
            </div>
        </div>
    <?php endforeach; ?>
</div>