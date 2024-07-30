<?php 
    use VBucharaPortfolio\Classes\InlineStyle;

    /**
     * @var array{
     *  styles: array{
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
     *  },
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultStyles = [
        "grid" => [
            "gridTemplateColumns" => "1fr",
            "gridTemplateRows" => "auto",
            "gridAutoFlow" => "row",
            "gridAutoColumns" => "1fr",
            "gridAutoRows" => "auto",
            "rowGap" => "0px",
            "columnGap" => "0px",
            "justifyContent" => "normal",
            "alignContent" => "normal",
            "justifyItems" => "normal",
            "alignItems" => "normal",
        ],
        "padding" => [],
        "minHeight" => "900px",
    ];
    
    /**
    * @var array{
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
    *  }
    */
    $styles = isset($attributes['styles']) 
        ? array_replace_recursive($defaultStyles, $attributes['styles']) 
        : $defaultStyles;

    $sectionStyle = new InlineStyle();

    // Grid Styles
    $sectionStyle->setProperty("--grid-template-columns", $styles['grid']["gridTemplateColumns"]);
    $sectionStyle->setProperty("--grid-template-rows", $styles['grid']["gridTemplateRows"]);
    $sectionStyle->setProperty("--grid-auto-flow", $styles['grid']["gridAutoFlow"]);
    $sectionStyle->setProperty("--grid-auto-columns", $styles['grid']["gridAutoColumns"]);
    $sectionStyle->setProperty("--grid-auto-rows", $styles['grid']["gridAutoRows"]);
    $sectionStyle->setProperty("--row-gap", $styles['grid']["rowGap"]);
    $sectionStyle->setProperty("--column-gap", $styles['grid']["columnGap"]);
    $sectionStyle->setProperty("--justify-content", $styles['grid']["justifyContent"]);
    $sectionStyle->setProperty("--justify-items", $styles['grid']["justifyItems"]);
    $sectionStyle->setProperty("--align-content", $styles['grid']["alignContent"]);
    $sectionStyle->setProperty("--align-items", $styles['grid']["alignItems"]);

    // Padding Styles
    if(isset($styles['padding']["paddingBlock"]) && $styles['padding']["paddingBlock"]){
        $sectionStyle->setProperty("--padding-block", $styles['padding']["paddingBlock"]);
    }
    if(isset($styles['padding']["paddingInline"]) && $styles['padding']["paddingInline"]){
        $sectionStyle->setProperty("--padding-inline", $styles['padding']["paddingInline"]);
    }
    if(isset($styles['padding']["paddingBlockStart"]) && $styles['padding']["paddingBlockStart"]){
        $sectionStyle->setProperty("--padding-block-start", $styles['padding']["paddingBlockStart"]);
    }
    if(isset($styles['padding']["paddingBlockEnd"]) && $styles['padding']["paddingBlockEnd"]){
        $sectionStyle->setProperty("--padding-block-end", $styles['padding']["paddingBlockEnd"]);
    }
    if(isset($styles['padding']["paddingInlineStart"]) && $styles['padding']["paddingInlineStart"]){
        $sectionStyle->setProperty("--padding-inline-start", $styles['padding']["paddingInlineStart"]);
    }
    if(isset($styles['padding']["paddingInlineEnd"]) && $styles['padding']["paddingInlineEnd"]){
        $sectionStyle->setProperty("--padding-inline-end", $styles['padding']["paddingInlineEnd"]);
    }

    // Other Styles
    $sectionStyle->setProperty("--min-height", $styles['minHeight']);
?>
<div 
    class="site-section"
    style="<?= $sectionStyle->getStyleString() ?>"
>
    <?= $content ?>
</div>