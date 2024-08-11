<?php 
    use VBucharaPortfolio\Helpers\DebugHelpers;
    use VBucharaPortfolio\Classes\InlineStyle;
    use VBucharaPortfolio\Helpers\BlockHelpers;
    use VBucharaPortfolio\Helpers\SvgHelpers;

    /**
     * @var array{
     *  blobBackgroundType?: string,
     *  styles?: array{
     *      metrics: array,
     *      position: array,
     *      padding: array,
     *      grid: array
     *  },
     *  className?: string
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "blobBackgroundType" => "none",
        "styles" => [
            "metrics" => BlockHelpers::get_default_metrics_style(),
            "position" => BlockHelpers::get_default_position_style(),
            "padding" => BlockHelpers::get_default_padding_style(),
            "grid" => BlockHelpers::get_default_grid_style(),
        ],
        "className" => null
    ];

    /**
     * @var array{
     *  blobBackgroundType: string,
     *  styles: array{
     *          metrics: array{
     *              minWidth: string | null,
     *              width: string | null,
     *              maxWidth: string | null,
     *              minHeight: string | null,
     *              height: string | null,
     *              maxHeight: string | null,
     *          },
     *          position: array{
     *              position: string | null,
     *              top: string | null,
     *              bottom: string | null,
     *              left: string | null,
     *              right: string | null,
     *              zIndex: number | null,
     *          },
     *          padding: array{
     *              paddingBlock: string | null,
     *              paddingInline: string | null,
     *              paddingInlineStart: string | null,
     *              paddingInlineEnd: string | null,
     *              paddingBlockStart: string | null,
     *              paddingBlockEnd: string | null,
     *          },
     *          grid: array{
     *              gridTemplateColumns: string,
     *              gridTemplateRows: string,
     *              gridAutoFlow: string,
     *              gridAutoColumns: string,
     *              gridAutoRows: string,
     *              rowGap: string,
     *              columnGap: string,
     *              justifyContent: string,
     *              alignContent: string,
     *              justifyItems: string,
     *              alignItems: string,
     *          }           
     *      },
     *      className: string | null
     *  }
     */
    $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes);

    $styles = $attributesWithDefaults["styles"];

    $containerStyle = new InlineStyle();

    BlockHelpers::set_metrics_style_variables($containerStyle, $styles['metrics']);
    BlockHelpers::set_position_style_variables($containerStyle, $styles["position"]);

    $containerContentStyle = new InlineStyle();

    BlockHelpers::set_padding_style_variables($containerContentStyle, $styles["padding"]);
    BlockHelpers::set_grid_style_variables($containerContentStyle, $styles["grid"]);

    $blobContainers = BlockHelpers::get_blob_containers();

    $blobContainerSelected = isset($blobContainers[$attributesWithDefaults['blobBackgroundType']])
        ? $blobContainers[$attributesWithDefaults['blobBackgroundType']]
        : null;

    $className = $attributesWithDefaults['className'];
?>
<div 
    class="portfolio-container<?= !empty($className) ? " $className" : "" ?>"
    style="<?= $containerStyle->getStyleString() ?>"
>
    <?php if(!empty($blobContainerSelected)): ?>
        <div class="portfolio-container__background">
            <?= $blobContainerSelected ?>
        </div>
    <?php endif; ?>
    <div 
        class="portfolio-container__content"
        style="<?= $containerContentStyle->getStyleString() ?>"
    >
        <?= $content ?>
    </div>
</div>