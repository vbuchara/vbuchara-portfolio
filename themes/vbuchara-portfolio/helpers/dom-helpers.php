<?php

namespace VBucharaPortfolio\Helpers;

use Ds\Set;
use VBucharaPortfolio\Classes\ClassList;
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

    /**
     * @param \DOMElement $element
     * @return Set<string>
     */
    public static function get_class_set_from_element(DOMElement $element){
        return new Set(explode(" ", $element->getAttribute("class")));
    }

    public static function get_class_list_from_element(DOMElement $element){
        $classListSet = self::get_class_set_from_element($element);

        return new ClassList($classListSet);
    }

    /**
     * @param \Ds\Set<string> $classList
     * @return string
     */
    public static function get_class_string_from_set(Set $classList){
        return $classList->reduce(function(string $result, string $class) use ($classList){
            if($class === $classList->first()) return $class;

            return "$result $class";
        }, "");
    }
}