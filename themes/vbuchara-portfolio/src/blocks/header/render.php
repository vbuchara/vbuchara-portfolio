<?php 
    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */
    $html5 = new Masterminds\HTML5();
    $logo = VBucharaPortfolio\Helpers\SvgHelpers::get_svg_element("logo");
?>
<header class="site-header">
    <h1 class="site-header__logo">
        <a href="<?= site_url(); ?>">
            <?= $html5->saveHTML($logo) ?>
        </a>
    </h1>
    <button
        type="button"
        class="site-header__contact-button"
    >
        Contact Me
    </button>
</header>