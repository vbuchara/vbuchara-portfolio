<?php 
   use VBucharaPortfolio\Classes\InlineStyle;
   use VBucharaPortfolio\Helpers\BlockHelpers;
   use Masterminds\HTML5;

   /**
    * @var array{
    *  tagName?: string,
    *  textContent?: string,
    *  textAlignment?: string,
    *  extraClasses?: string[],
    *  styles?: array{
    *    lineHeight: string,
    *    whiteSpace: string,
    *    underlineColor?: string | null,
    *    underlineGradient?: string | null
    *  },
    * } $attributes
    * @var string $content
    * @var WP_Block $block
    */

   $defaultUnderline = BlockHelpers::get_default_underline_style();

   $defaultAttributes = [
      "tagName" => "h1",
      "textContent" => "",
      "textAlignment" => "left",
      "extraClasses" => [],
      "styles" => [
         "lineHeight" => "1.5",
         "whiteSpace" => "normal",
         "underlineColor" => $defaultUnderline['underlineColor'],
         "underlineGradient" => $defaultUnderline['underlineGradient']
      ]
   ];

   /**
    * @var array{
    *  tagName: string,
    *  textContent: string,
    *  textAlignment: string,
    *  extraClasses: string[],
    *  styles: array{
    *    lineHeight: string,
    *    whiteSpace: string,
    *    underlineColor: string | null,
    *    underlineGradient: string | null
    *  },
    * }
    */
   $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes);

   $extraClasses = array_reduce(
      $attributesWithDefaults["extraClasses"], 
      fn(string $result, string $className) => "$result $className", 
      ""
   );

   $styles = $attributesWithDefaults["styles"];

   $html5 = new HTML5();
   $domDocument = new DOMDocument();

   $heading = $domDocument->createElement($attributesWithDefaults["tagName"]);
   $heading->setAttribute('class', 'portfolio-heading' . $extraClasses);

   $textContentFragment = $html5->loadHTMLFragment($attributesWithDefaults["textContent"], [
      "target_document" => $domDocument,
      "disable_html_ns" => true
   ]);
   $heading->append($textContentFragment);

   $inlineStyle = new InlineStyle();
   $inlineStyle->setProperty("--text-align", $attributesWithDefaults["textAlignment"]);
   $inlineStyle->setProperty("--line-height", $styles['lineHeight']);
   $inlineStyle->setProperty("--white-space", $styles['whiteSpace']);

   BlockHelpers::set_underline_style_variables($inlineStyle, [
      "underlineColor" => $styles['underlineColor'],
      "underlineGradient" => $styles['underlineGradient']
   ]);

   $heading->setAttribute('style', $inlineStyle->getStyleString());
?>
<?= $domDocument->saveHTML($heading) ?>