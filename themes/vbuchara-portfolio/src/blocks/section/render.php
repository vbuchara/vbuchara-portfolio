<?php 
    use VBucharaPortfolio\Classes\InlineStyle;
    use VBucharaPortfolio\Helpers\BlockHelpers;

    /**
     * @var array{
     *  styles?: array{
     *      grid: array{
     *          gridTemplateColumns: string,
     *          gridTemplateRows: string,
     *          gridAutoFlow: string,
     *          gridAutoColumns: string,
     *          gridAutoRows: string,
     *          rowGap: string,
     *          columnGap: string,
     *          justifyContent: string,
     *          alignContent: string,
     *          justifyItems: string,
     *          alignItems: string,
     *      },
     *      padding: array{
     *          paddingBlock: string,
     *          paddingInline: string,
     *          paddingInlineStart: string,
     *          paddingInlineEnd: string,
     *          paddingBlockStart: string,
     *          paddingBlockEnd: string,
     *      },
     *      minHeight: string,
     *      backgroundColor?: string,
     *      backgroundGradient?: string
     *  },
     *  backgroundImage?: array{
     *      backgroundImage?: string,
     *      backgroundAttachment?: string,
     *      backgroundClip?: string,
     *      backgroundOrigin?: string,
     *      backgroundPosition?: string,
     *      backgroundPositionX?: string,
     *      backgroundPositionY?: string,
     *      backgroundRepeat?: string,
     *      backgroundSize?: string,
     *  },
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "styles" => [
            "grid" => BlockHelpers::get_default_grid_style(),
            "padding" => BlockHelpers::get_default_padding_style(),
            "minHeight" => "900px",
            "backgroundColor" => null,
            "backgroundGradient" => null,
        ],
        "backgroundImage" => [
            "backgroundImage" => null,
            "backgroundAttachment" => null,
            "backgroundClip" => null,
            "backgroundOrigin" => null,
            "backgroundPosition" => null,
            "backgroundPositionX" => null,
            "backgroundPositionY" => null,
            "backgroundRepeat" => null,
            "backgroundSize" => null,
        ],
    ];
    
    /**
    * @var array{
    *   styles: array{
    *       grid: array{
    *          gridTemplateColumns: string,
    *          gridTemplateRows: string,
    *          gridAutoFlow: string,
    *          gridAutoColumns: string,
    *          gridAutoRows: string,
    *          rowGap: string,
    *          columnGap: string,
    *          justifyContent: string,
    *          alignContent: string,
    *          justifyItems: string,
    *          alignItems: string,
    *      },
    *      padding: array{
    *          paddingBlock: string | null,
    *          paddingInline: string | null,
    *          paddingInlineStart: string | null,
    *          paddingInlineEnd: string | null,
    *          paddingBlockStart: string | null,
    *          paddingBlockEnd: string | null,
    *      },
    *      minHeight: string,
    *      backgroundColor: string | null,
    *      backgroundGradient: string | null
    *   },
    *   backgroundImage: array{
    *      backgroundImage: string | null,
    *      backgroundAttachment: string | null,
    *      backgroundClip: string | null,
    *      backgroundOrigin: string | null,
    *      backgroundPosition: string | null,
    *      backgroundPositionX: string | null,
    *      backgroundPositionY: string | null,
    *      backgroundRepeat: string | null,
    *      backgroundSize: string | null,
    *   }
    * }
    */
    $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes) ;

    $sectionStyle = new InlineStyle();

    $styles = $attributesWithDefaults["styles"];

    BlockHelpers::set_grid_style_variables($sectionStyle, $styles["grid"]);
    BlockHelpers::set_padding_style_variables($sectionStyle, $styles["padding"]);

    // Other Styles
    $sectionStyle->setProperty("--min-height", $styles['minHeight']);
    $sectionStyle->setProperty("--background-color", $styles['backgroundColor']);
    $sectionStyle->setProperty("--background-image", $styles['backgroundGradient']);

    // Background Image
    $backgroundImage = $attributesWithDefaults["backgroundImage"];

    $sectionStyle->setProperty("--background-image", $backgroundImage["backgroundImage"]);
    $sectionStyle->setProperty("--background-attachment", $backgroundImage["backgroundAttachment"]);
    $sectionStyle->setProperty("--background-clip", $backgroundImage["backgroundClip"]);
    $sectionStyle->setProperty("--background-origin", $backgroundImage["backgroundOrigin"]);
    $sectionStyle->setProperty("--background-position", $backgroundImage["backgroundPosition"]);
    $sectionStyle->setProperty("--background-position-x", $backgroundImage["backgroundPositionX"]);
    $sectionStyle->setProperty("--background-position-y", $backgroundImage["backgroundPositionY"]);
    $sectionStyle->setProperty("--background-repeat", $backgroundImage["backgroundRepeat"]);
    $sectionStyle->setProperty("--background-size", $backgroundImage["backgroundSize"]);
?>
<div 
    class="site-section"
    style="<?= $sectionStyle->getStyleString() ?>"
>
    <?= $content ?>
</div>