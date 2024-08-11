<?php 
     use VBucharaPortfolio\Helpers\SvgHelpers;
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $html5 = new Masterminds\HTML5();
    $blob1 = SvgHelpers::get_svg_element("blob-1");
?>
<div class="welcome-container">
    <div class="welcome-container__background">
        <?= $html5->saveHTML($blob1) ?>
    </div>
    <?= $content ?>
</div>