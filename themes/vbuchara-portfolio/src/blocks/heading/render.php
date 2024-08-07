<?php 
   use VBucharaPortfolio\Classes\InlineStyle;
   use Masterminds\HTML5;

   /**
    * @var array{
    *  tagName: string,
    *  textContent: string,
    *  textAlignment: string,
    *  extraClasses: string[],
    *  styles: array{
    *    lineHeight: string,
    *    whiteSpace: string,
    *    underlineColor?: string,
    *    underlineGradient?: string
    *  },
    * } $attributes
    * @var string $content
    * @var WP_Block $block
    */

   $tagName = isset($attributes['tagName']) ? $attributes['tagName'] : "h1";
   $textContent = isset($attributes['textContent']) ? $attributes['textContent'] : "";
   $textAlign = isset($attributes["textAlignment"]) ? $attributes['textAlignment'] : "left";

   $extraClasses = isset($attributes['extraClasses']) 
      ? array_reduce($attributes["extraClasses"], fn(string $result, string $className) => "$result $className", "") 
      : "";

   /**
    * @var array{
    *    lineHeight: string,
    *    whiteSpace: string,
    *    underlineColor: string|null,
    *    underlineGradient: string|null
    *  }
    */
   $defaultStyles = [
      "lineHeight" => "1.5",
      "whiteSpace" => "normal",
      "underlineColor" => null,
      "underlineGradient" => null
   ];
   $styles = isset($attributes['styles']) ? array_merge($defaultStyles, $attributes['styles']) : $defaultStyles;

   $html5 = new HTML5();
   $domDocument = new DOMDocument();

   $heading = $domDocument->createElement($tagName);
   $heading->setAttribute('class', 'portfolio-heading' . $extraClasses);

   $textContentFragment = $html5->loadHTMLFragment($textContent, [
      "target_document" => $domDocument,
      "disable_html_ns" => true
   ]);
   $heading->append($textContentFragment);

   $inlineStyle = new InlineStyle();
   $inlineStyle->setProperty("--text-align", "$textAlign");
   $inlineStyle->setProperty("--line-height", $styles['lineHeight']);
   $inlineStyle->setProperty("--white-space", $styles['whiteSpace']);

   if(!empty($styles['underlineColor'])){
      $inlineStyle->setProperty("--underline-color", $styles['underlineColor']);
   }

   if(!empty($styles['underlineGradient'])){
      $inlineStyle->setProperty("--underline-image", $styles['underlineGradient']);
   }

   $heading->setAttribute('style', $inlineStyle->getStyleString());
?>
<?= $domDocument->saveHTML($heading) ?>