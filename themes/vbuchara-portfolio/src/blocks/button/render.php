<?php 
    use VBucharaPortfolio\Classes\InlineStyle;

    /**
     * @var array{
     *  textContent: string,
     *  linkUrl: string,
     *  extraClasses: string[],
     *  styles: array{
     *      backgroundColor?: string,
     *      backgroundGradient?: string,
     *      borderColor?: string,
     *      borderGradient?: string,
     *      color: string,
     *      borderWidth: string,
     *  },
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $textContent = isset($attributes['textContent']) ? $attributes['textContent'] : "";
    $extraClasses = isset($attributes['extraClasses']) 
      ? array_reduce($attributes["extraClasses"], fn(string $result, string $className) => "$result $className", "") 
      : "";

    $defaultStyles = [
        "color" => "#f7f4f3ff",   
    ];

    /**
     * @var array{
     *      backgroundColor?: string,
     *      backgroundGradient?: string,
     *      borderColor?: string,
     *      borderGradient?: string,
     *      color: string,
     *      borderWidth: string,
     *  }
     */
    $styles = isset($attributes['styles']) 
        ? array_replace_recursive($defaultStyles, $attributes["styles"]) 
        : $defaultStyles;

    $inlineStyle = new InlineStyle();

    if(isset($styles["backgroundColor"]) && !empty($styles['backgroundColor'])){
        $inlineStyle->setProperty("--background-color", $styles["backgroundColor"]);
    };
    if(isset($styles["backgroundGradient"]) && !empty($styles['backgroundGradient'])){
        $inlineStyle->setProperty("--background-image", $styles["backgroundGradient"]);
    };
    if(isset($styles["borderColor"]) && !empty($styles['borderColor'])){
        $inlineStyle->setProperty("--border-color", $styles["borderColor"]);
    };
    if(isset($styles["borderGradient"]) && !empty($styles['borderGradient'])){
        $inlineStyle->setProperty("--border-image-source", $styles["borderGradient"]);
    };
    
    $inlineStyle->setProperty("--color", $styles["color"]);
    $inlineStyle->setProperty("--border-width", $styles["borderWidth"]);
?>
<a
    class="portfolio-button<?= $extraClasses ?>"
    href="<?= isset($attributes['linkUrl']) ? $attributes['linkUrl'] : "" ?>"
    style="<?= $inlineStyle->getStyleString() ?>"
>
    <?= $textContent ?>
</a>