<?php 
    use VBucharaPortfolio\Classes\InlineStyle;

    /**
     * @var array{
     *  textContent: string,
     *  extraClasses: string[],
     *  styles: array{
     *      color?: string,
     *      fontSize?: string,
     *  }
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */
    $textContent = isset($attributes['textContent']) ? $attributes['textContent'] : "";
    $extraClasses = isset($attributes['extraClasses']) 
      ? array_reduce($attributes["extraClasses"], fn(string $result, string $className) => "$result $className", "") 
      : "";

    /**
     * @var array{
     *      color?: string,
     *      fontSize?: string,
     *  }
     */
    $styles = isset($attributes['styles']) ? $attributes['styles'] : [];

    $inlineStyle = new InlineStyle();
    
    if(isset($styles['color']) && !empty($styles['color'])){
        $inlineStyle->setProperty('--color', $styles['color']);
    }
    
    if(isset($styles['fontSize']) && !empty($styles['fontSize'])){
        $inlineStyle->setProperty('--font-size', $styles['fontSize']);
    }
?>
<p 
    class="portfolio-paragraph<?= $extraClasses ?>"
    style="<?= $inlineStyle->getStyleString() ?>"
>
    <?= $textContent ?>
</p>