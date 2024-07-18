<?php 
    use VBucharaPortfolio\Helpers\SvgHelpers;
    use VBucharaPortfolio\Helpers\StringHelpers;

    /**
     * @var array{
     *  menuItems: array{
     *      id: string,
     *      title: string,
     *      url: string,
     *  }[]
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */
    $currentUrl = StringHelpers::remove_http(get_pagenum_link());

    /**
     * @param array{id: string, title: string, url: string} $menuItem 
     * @var array{id: string, title: string, url: string, is_current: boolean}[] $menuItems
     */
    $menuItems = array_map(function($menuItem) use ($currentUrl){
        $itemUrl = StringHelpers::remove_http($menuItem["url"]);

        return array_merge($menuItem, [
            "is_current" => str_contains($currentUrl, $itemUrl)
        ]);
    }, isset($attributes["menuItems"]) ? $attributes["menuItems"] : []);

    $context = wp_interactivity_data_wp_context([
        "isMenuOpen" => false,
    ], "vbuchara-portfolio/header");

    $html5 = new Masterminds\HTML5();
    $logoIcon = SvgHelpers::get_svg_element("logo");
    $logoIcon->setAttribute("class", "site-header__logo-icon");

    $menuIcon = SvgHelpers::get_svg_element("menu");
    $menuIcon->setAttribute("class", "site-header__menu-toggle-icon");
    $menuIcon->setAttribute("aria-hidden", "true");
    $menuIcon->setAttribute("data-wp-bind--hidden", "context.isMenuOpen");

    $closeIcon = SvgHelpers::get_svg_element("close");
    $closeIcon->setAttribute("class", "site-header__menu-toggle-icon");
    $closeIcon->setAttribute("aria-hidden", "true");
    $closeIcon->setAttribute("hidden", "true");
    $closeIcon->setAttribute("data-wp-bind--hidden", "!context.isMenuOpen");
?>
<header 
    <?= $context ?>
    data-wp-interactive="vbuchara-portfolio/header"
    class="site-header site-header--menu-open"
    data-wp-class--site-header--menu-open="context.isMenuOpen"
>
    <h1 class="site-header__logo">
        <a 
            href="<?= site_url(); ?>"
            class="site-header__logo-link"
        >
            <?= $html5->saveHTML($logoIcon) ?>
        </a>
    </h1>
    <button
        type="button"
        class="site-header__menu-toggle"
        data-wp-on--click="actions.toggleMenuOpen"
    >
        <?= $html5->saveHTML($menuIcon) ?>
        <?= $html5->saveHTML($closeIcon) ?>
    </button>
    <nav class="site-header__menu">
        <ul
            class="site-header__menu-items"
        >
            <?php foreach($menuItems as $menuItem): ?>
                <li 
                    class="site-header__menu-item <?= $menuItem['is_current'] ? "site-header__menu-item--active" : "" ?>"
                >
                    <a
                        class="site-header__menu-item-link" 
                        href="<?= $menuItem['url'] ?>"
                    >
                        <?= $menuItem['title'] ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
        <button
            type="button"
            class="site-header__menu-contact-button"
        >
            Contact Me
        </button>
    </nav>
</header>