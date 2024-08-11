<?php 

namespace VBucharaPortfolio\Helpers;

use Masterminds\HTML5;
use VBucharaPortfolio\Classes\InlineStyle;

class BlockHelpers {

    /**
     * @param InlineStyle $inlineStyle
     * @param array{
     *  paddingBlock: string | null,
     *  paddingInline: string | null,
     *  paddingInlineStart: string | null,
     *  paddingInlineEnd: string | null,
     *  paddingBlockStart: string | null,
     *  paddingBlockEnd: string | null,
     * } $padding
     * @return void
     */
    public static function set_padding_style_variables(InlineStyle $inlineStyle, array $padding){
        $inlineStyle->setProperty("--padding-block", $padding["paddingBlock"]);
        $inlineStyle->setProperty("--padding-inline", $padding["paddingInline"]);
        $inlineStyle->setProperty("--padding-block-start", $padding["paddingBlockStart"]);
        $inlineStyle->setProperty("--padding-block-end", $padding["paddingBlockEnd"]);
        $inlineStyle->setProperty("--padding-inline-start", $padding["paddingInlineStart"]);
        $inlineStyle->setProperty("--padding-inline-end", $padding["paddingInlineEnd"]);
    }

    /**
     * @return array{
     *  paddingBlock: string | null,
     *  paddingInline: string | null,
     *  paddingInlineStart: string | null,
     *  paddingInlineEnd: string | null,
     *  paddingBlockStart: string | null,
     *  paddingBlockEnd: string | null,
     * }
     */
    public static function get_default_padding_style(){
        return [
            "paddingBlock" => null,
            "paddingInline" => null,
            "paddingBlockStart" => null,
            "paddingBlockEnd" => null,
            "paddingInlineStart" => null,
            "paddingInlineEnd" => null,
        ];
    }
    
    /**
     * @param InlineStyle $inlineStyle
     * @param array{
     *  gridTemplateColumns: string,
     *  gridTemplateRows: string,
     *  gridAutoFlow: string,
     *  gridAutoColumns: string,
     *  gridAutoRows: string,
     *  rowGap: string,
     *  columnGap: string,
     *  justifyContent: string,
     *  alignContent: string,
     *  justifyItems: string,
     *  alignItems: string,
     * } $grid
     * @return void
     */
    public static function set_grid_style_variables(InlineStyle $inlineStyle, array $grid){
        $inlineStyle->setProperty("--grid-template-columns", $grid["gridTemplateColumns"]);
        $inlineStyle->setProperty("--grid-template-rows", $grid["gridTemplateRows"]);
        $inlineStyle->setProperty("--grid-auto-flow", $grid["gridAutoFlow"]);
        $inlineStyle->setProperty("--grid-auto-columns", $grid["gridAutoColumns"]);
        $inlineStyle->setProperty("--grid-auto-rows", $grid["gridAutoRows"]);
        $inlineStyle->setProperty("--row-gap", $grid["rowGap"]);
        $inlineStyle->setProperty("--column-gap", $grid["columnGap"]);
        $inlineStyle->setProperty("--justify-content", $grid["justifyContent"]);
        $inlineStyle->setProperty("--justify-items", $grid["justifyItems"]);
        $inlineStyle->setProperty("--align-content", $grid["alignContent"]);
        $inlineStyle->setProperty("--align-items", $grid["alignItems"]);
    }

    /**
     * @return array{
     *  gridTemplateColumns: string,
     *  gridTemplateRows: string,
     *  gridAutoFlow: string,
     *  gridAutoColumns: string,
     *  gridAutoRows: string,
     *  rowGap: string,
     *  columnGap: string,
     *  justifyContent: string,
     *  alignContent: string,
     *  justifyItems: string,
     *  alignItems: string,
     * }
     */
    public static function get_default_grid_style(){
        return [
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
        ];
    }

    /**
     * @param InlineStyle $inlineStyle
     * @param array{
     *  position: string | null,
     *  top: string | null,
     *  bottom: string | null,
     *  left: string | null,
     *  right: string | null,
     *  zIndex: number | null,
     * } $position
     */
    public static function set_position_style_variables(InlineStyle $inlineStyle, array $position){
        $inlineStyle->setProperty("--position", $position["position"]);
        $inlineStyle->setProperty("--top", $position["top"]);
        $inlineStyle->setProperty("--bottom", $position["bottom"]);
        $inlineStyle->setProperty("--left", $position["left"]);
        $inlineStyle->setProperty("--right", $position["right"]);
        $inlineStyle->setProperty("--z-index", $position["zIndex"]);
    }

    /**
     * @return array{
     *  position: string | null,
     *  top: string | null,
     *  bottom: string | null,
     *  left: string | null,
     *  right: string | null,
     *  zIndex: number | null,
     * }
     */
    public static function get_default_position_style(){
        return [
            "position" => null,
            "top" => null,
            "bottom" => null,
            "left" => null,
            "right" => null,
            "zIndex" => null,
        ];
    }
    
    /**
     * @param InlineStyle $inlineStyle
     * @param array{
     *  minWidth: string | null,
     *  width: string | null,
     *  maxWidth: string | null,
     *  minHeight: string | null,
     *  height: string | null,
     *  maxHeight: string | null,
     * } $metrics
     * @return void
     */
    public static function set_metrics_style_variables(InlineStyle $inlineStyle, array $metrics){
        $inlineStyle->setProperty("--min-width", $metrics["minWidth"]);
        $inlineStyle->setProperty("--width", $metrics["width"]);
        $inlineStyle->setProperty("--max-width", $metrics["maxWidth"]);
        $inlineStyle->setProperty("--min-height", $metrics["minHeight"]);
        $inlineStyle->setProperty("--height", $metrics["height"]);
        $inlineStyle->setProperty("--max-height", $metrics["maxHeight"]);
    }

    /**
     * @return array{
     *  minWidth: string | null,
     *  width: string | null,
     *  maxWidth: string | null,
     *  minHeight: string | null,
     *  height: string | null,
     *  maxHeight: string | null,
     * }
     */
    public static function get_default_metrics_style(){
        return [
            "minWidth" => null,
            "width" => null,
            "maxWidth" => null,
            "minHeight" => null,
            "height" => null,
            "maxHeight" => null,
        ];
    }

    /**
     * @return array{
     *  none: null,
     *  welcome: string,
     *  about: string
     * }
     */
    public static function get_blob_containers(){
        $html5 = new HTML5();

        $welcomeBlob = SvgHelpers::get_svg_element("blob-1");
        $aboutBlob = SvgHelpers::get_svg_element("blob-2");

        $aboutBlob->setAttribute("preserveAspectRatio", "none");

        return [
            "none" => null,
            "welcome" => $html5->saveHTML($welcomeBlob),
            "about" => $html5->saveHTML($aboutBlob),
        ];
    }
}