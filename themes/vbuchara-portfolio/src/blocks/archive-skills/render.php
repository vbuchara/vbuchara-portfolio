<?php 
    /**
     * @var WP_Post[] $posts
     */
    global $posts;

    use VBucharaPortfolio\Helpers\PostHelpers;
    use VBucharaPortfolio\Helpers\SvgHelpers;

    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $html5 = new Masterminds\HTML5();

    $folderIcon = SvgHelpers::get_svg_element("folder");
    $folderIcon->setAttribute("class", "portfolio-archive-skills__card-back-icon");
    $folderIcon->setAttribute("fill", "currentColor");
?>
<div class="portfolio-archive-skills">
    <?php foreach($posts as $skill): ?>
        <?php
            $iconSvg = SvgHelpers::get_svg_element_from_media(get_field("skill_icon", $skill->ID));
            if(empty($iconSvg)) continue;

            $iconSvg->setAttribute("class", "portfolio-archive-skills__card-front-icon");
            $iconSvg->setAttribute("fill", "currentColor");
        ?>
        <div 
            id="<?= $skill->post_name ?>"
            class="portfolio-archive-skills__card"
        >
            <div class="portfolio-archive-skills__card-front">
                <?= $html5->saveHTML($iconSvg) ?>
                <h3 class="portfolio-archive-skills__card-front-title">
                    <?= get_the_title($skill) ?>
                </h3>
            </div>
            <div class="portfolio-archive-skills__card-back">
                <h3 class="portfolio-archive-skills__card-back-title">
                    Level: <?= PostHelpers::get_skill_level_label($skill) ?>
                </h3>
                <a 
                    class="portfolio-archive-skills__card-back-link"
                    href="/"
                >
                    <?= $html5->saveHTML($folderIcon) ?>
                    See Projects
                </a>
            </div>
        </div>
    <?php endforeach; ?>
</div>