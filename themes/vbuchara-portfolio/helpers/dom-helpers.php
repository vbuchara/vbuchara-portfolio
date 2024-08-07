<?php

namespace VBucharaPortfolio\Helpers;

use VBucharaPortfolio\Classes\InlineStyle;
use Masterminds\HTML5;
use DOMElement;

class DomHelpers {

    /**
     * @param array<string, string> $style
     */
    public static function convert_to_inline_style(array $styles){
        $inlineStyles = new InlineStyle($styles);

        return $inlineStyles->getStyleString();
    }

    public static function get_element_from_string(
        string $html,
        string $tagName,
        array $options = []
    ): DOMElement | null{
        $html5 = new HTML5();
        $document = $html5->loadHTML($html, $options);

        $element = $document->getElementsByTagName($tagName)->item(0);

        if(!($element instanceof DOMElement)) return null;

        return $element;
    }
}