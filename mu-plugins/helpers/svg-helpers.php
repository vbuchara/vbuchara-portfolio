<?php

namespace MuPlugins\Helpers;

use Masterminds\HTML5;
use DOMElement;

define("MU_PLUGIN_FOLDER", dirname(__DIR__));

class SvgHelpers {
    
    /**
     * @return string
     */
    public static function load_svg(string $file){
        $svgFile = str_ends_with($file, ".svg") ? $file : "$file.svg";
        $svgFilePath = MU_PLUGIN_FOLDER . "/svgs/$svgFile";

        if(file_exists($svgFilePath)){
            return file_get_contents($svgFilePath);
        }

        return "";
    }

    public static function get_svg_element(string $file){
        $svgContent = self::load_svg($file);

        $html5 = new HTML5();
        $dom = $html5->loadHTML($svgContent);

        $svgNode = $dom->getElementsByTagName("svg")->item(0);
        $svgElement = $svgNode instanceof DOMElement ? $svgNode : new DOMElement("svg", $svgContent);

        return $svgElement;
    }

    public static function get_svg_base64(string $file){
        $svgContent = self::load_svg($file);

        return 'data:image/svg+xml;base64,' . base64_encode($svgContent);
    }
}