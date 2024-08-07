<?php

namespace VBucharaPortfolio\Helpers;

use Masterminds\HTML5;
use DOMElement;

class SvgHelpers {
    
    /**
     * @return string
     */
    public static function load_svg(string $file){
        $svgFile = str_ends_with($file, ".svg") ? $file : "$file.svg";
        $svgFilePath = get_theme_file_path("/assets/svgs/$svgFile");

        if(file_exists($svgFilePath)){
            return file_get_contents($svgFilePath);
        }

        return "";
    }

    public static function get_svg_element(string $file, array $options = []){
        $svgContent = self::load_svg($file);

        $html5 = new HTML5();
        $dom = $html5->loadHTML($svgContent, $options);

        $svgNode = $dom->getElementsByTagName("svg")->item(0);
        $svgElement = $svgNode instanceof DOMElement ? $svgNode : $dom->createElement("svg", $svgContent);

        return $svgElement;
    }

    public static function get_svg_base64(string $file){
        $svgContent = self::load_svg($file);

        return 'data:image/svg+xml;base64,' . base64_encode($svgContent);
    }

    
    public static function get_svg_element_from_media(
        string | int $attachment_id
    ){
        $iconSource = get_attached_file((int) $attachment_id);
        if(empty($iconSource)) return null;
        
        $iconHtml = file_get_contents($iconSource);
        if(empty($iconHtml)) return null;

        $iconSvg = DomHelpers::get_element_from_string($iconHtml, "svg");

        return $iconSvg;
    }
}