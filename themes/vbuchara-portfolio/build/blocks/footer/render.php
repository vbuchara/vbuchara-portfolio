<?php 
    use Masterminds\HTML5;
    use VBucharaPortfolio\Helpers\SvgHelpers;

    /**
     * @var array{
     *  menuItems: array{
     *      id: string,
     *      title: string,
     *      url: string,
     *  }[],
     *  socialLinks: array{
     *      linkedin: string,
     *      github: string,
     *      gmail: string
     *  },
     *  copyrightText: string,
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $logoImage = get_theme_file_uri("/assets/svgs/logo-full.svg");

    $menuItems = isset($attributes["menuItems"]) ? $attributes["menuItems"] : [];

    /**
     * @var array{
     *      linkedin: string,
     *      github: string,
     *      gmail: string
     *  }
     */
    $defaultSocialLinks = [
        "linkedin" => "",
        "github" => "",
        "gmail" => ""
    ];
    $socialLinks = isset($attributes["socialLinks"]) ? $attributes["socialLinks"] : $defaultSocialLinks;

    $copyrightText = isset($attributes["copyrightText"]) 
        ? $attributes['copyrightText'] 
        : "Copyright © 2024 Vinicius Buchara All Rights Reserved";

    $context = wp_interactivity_data_wp_context([
        'socialLinks' => $socialLinks,
        'gmailHasBeingCopied' => false,
        'gmailHasBeingCopiedTimeout' => null
    ], "vbuchara-portfolio/footer");
    $socialLinkContext = wp_interactivity_data_wp_context([
        'shouldAnimate' => false,
        'repeatAnimationTimeout' => null
    ], "vbuchara-portfolio/footer");

    $html5 = new HTML5();
    $linkedinIcon = SvgHelpers::get_svg_element("linkedin");
    $linkedinIcon->setAttribute("class", "site-footer__social-contact-item-icon");
    $linkedinIcon->setAttribute("width", "61");
    $linkedinIcon->setAttribute("height", "60");

    $githubIcon = SvgHelpers::get_svg_element("github");
    $githubIcon->setAttribute("class", "site-footer__social-contact-item-icon");
    $githubIcon->setAttribute("width", "61");
    $githubIcon->setAttribute("height", "60");

    $gmailIcon = SvgHelpers::get_svg_element("gmail");
    $gmailIcon->setAttribute("class", "site-footer__social-contact-item-icon");
    $gmailIcon->setAttribute("width", "71");
    $gmailIcon->setAttribute("height", "60");

?>
<footer 
    data-wp-interactive="vbuchara-portfolio/footer"
    data-wp-init="callbacks.onFooterInit"
    class="site-footer"
    <?= $context?>
>
    <a class="site-footer__logo" href="<?= site_url(); ?>">
        <img
            class="site-footer__logo-image"
            src="<?= $logoImage ?>"
            alt="Logo of Vinicius Buchara Web Developer"
        />
    </a>
    <nav class="site-footer__menu">
        <ul class="site-footer__menu-items">
            <?php foreach($menuItems as $menuItem): ?>
                <li class="site-footer__menu-item">
                    <a
                        class="site-footer__menu-item-link" 
                        href=<?= $menuItem['url'] ?>
                    >
                        <?= $menuItem['title'] ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>
    <div class="site-footer__social-contact">
        <h1 class="site-footer__social-contact-title">
            Contact Me Through
        </h1>
        <ul class="site-footer__social-contact-items">
            <li class="site-footer__social-contact-item">
                <a
                    class="site-footer__social-contact-item-link"
                    href="<?= $socialLinks['linkedin'] ?>"
                    title="<?= $socialLinks['linkedin'] ?>"
                    target="_blank"
                    rel="noopener"
                    data-wp-class--site-footer__social-contact-item-link--animate="context.shouldAnimate"
                    data-wp-on--animate="actions.doLinkAnimation"
                    data-wp-on--animationend="actions.onLinkAnimationEnd"
                    data-wp-on--animation-clear="actions.onLinkAnimationClear"
                    <?= $socialLinkContext ?>
                >
                    <?= $html5->saveHTML($linkedinIcon) ?>
                </a>
            </li>
            <li class="site-footer__social-contact-item">
                <a
                    class="site-footer__social-contact-item-link"
                    href="<?= $socialLinks['github'] ?>"
                    title="<?= $socialLinks['github'] ?>"
                    target="_blank"
                    rel="noopener"
                    data-wp-class--site-footer__social-contact-item-link--animate="context.shouldAnimate"
                    data-wp-on--animate="actions.doLinkAnimation"
                    data-wp-on--animationend="actions.onLinkAnimationEnd"
                    data-wp-on--animation-clear="actions.onLinkAnimationClear"
                    <?= $socialLinkContext ?>
                >
                    <?= $html5->saveHTML($githubIcon) ?>
                </a>
            </li>
            <li class="site-footer__social-contact-item">
                <button
                    type="button"
                    class="site-footer__social-contact-item-link"
                    title="<?= $socialLinks['gmail'] ?>"
                    data-wp-on-async--click="actions.copyToClipboard"
                    data-wp-class--site-footer__social-contact-item-link--copied="context.gmailHasBeingCopied"
                    data-wp-class--site-footer__social-contact-item-link--animate="context.shouldAnimate"
                    data-wp-on--animate="actions.doLinkAnimation"
                    data-wp-on--animationend="actions.onLinkAnimationEnd"
                    data-wp-on--animation-clear="actions.onLinkAnimationClear"
                    <?= $socialLinkContext ?>
                >
                    <div class="site-footer__social-contact-item-link-popover">
                        Copied to clipboard!
                    </div>
                    <?= $html5->saveHTML($gmailIcon) ?>
                </button>
            </li>
        </ul>
    </div>
    <div class="site-footer__copyright">
        <p><?= $copyrightText ?></p>
    </div>
</footer>