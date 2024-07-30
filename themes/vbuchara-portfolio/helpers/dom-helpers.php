<?php

namespace VBucharaPortfolio\Helpers;

use VBucharaPortfolio\Classes\InlineStyle;

class DomHelpers {

    /**
     * @param array<string, string> $style
     */
    public static function convertToInlineStyle(array $styles){
        $inlineStyles = new InlineStyle($styles);

        return $inlineStyles->getStyleString();
    }
}