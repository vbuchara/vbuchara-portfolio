<?php 
    use VBucharaPortfolio\Classes\InlineStyle;
    use VBucharaPortfolio\Helpers\BlockHelpers;
    use VBucharaPortfolio\Helpers\DebugHelpers;

    /**
     * @var array{
     *  titleText?: string,
     *  subtitleText?: string,
     *  styles?: array{
     *      underline: array{
     *          underlineColor?: string | null,
     *          underlineGradient?: string | null,
     *      }
     *  }
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "titleText" => "Archive Title",
        "subtitleText" => "Archive Subtitlet",
        "styles" => [
            "underline" => BlockHelpers::get_default_underline_style(),
        ],
    ];

    /**
     * @var array{
     *  titleText: string,
     *  subtitleText: string,
     *  styles: array{
     *      underline: array{
     *          underlineColor: string | null,
     *          underlineGradient: string | null,
     *      }
     *  }
     * }
     */
    $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes);

    $archiveSubtitle = get_the_archive_title();
    $isArchive = !str_starts_with($archiveSubtitle, "Archives");
    
    $styles = $attributesWithDefaults["styles"];

    $titleInlineStyles = new InlineStyle();

    BlockHelpers::set_underline_style_variables($titleInlineStyles, $styles["underline"]);
?>
<div class="portfolio-archive-header">
    <h1
        class="portfolio-archive-header__title"
        style="<?= $titleInlineStyles->getStyleString() ?>"
    >
        <?= $attributesWithDefaults["titleText"] ?>
    </h1>
    <?php if($isArchive): ?>
        <h3
            class="portfolio-archive-header__subtitle portfolio-archive-header__subtitle--archive"
        >
            <?= $archiveSubtitle ?>
        </h3>
    <?php else: ?>
        <h3
            class="portfolio-archive-header__subtitle"
        >
            <?= $attributesWithDefaults["subtitleText"] ?>
        </h3>
    <?php endif; ?>
</div>