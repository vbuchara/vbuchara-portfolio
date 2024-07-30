<?php 
    /**
     * @var array{
     *  imageId: number,
     *  imageUrl: string,
     *  imageAlt: string,
     *  hideImageAtBreakpoints: string[]
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "imageId" => 0,
        "imageUrl" => get_theme_file_uri("/assets/images/front-image.png"),
        "imageAlt" => "Image of a guy sitting on a chair, in front of a computer coding",
        "hideImageAtBreakpoints" => []
    ];

    /**
     * @var array{
     *  imageId: number,
     *  imageUrl: string,
     *  imageAlt: string,
     *  hideImageAtBreakpoints: string[]
     * }
     */
    $attributesWithDefault = array_replace_recursive($defaultAttributes, $attributes);

    $domDocument = new DOMDocument();
    $image = $domDocument->createElement("img");

    $image->setAttribute("class", "portfolio-image");
    $image->setAttribute("src", $attributesWithDefault['imageUrl']);
    $image->setAttribute("alt", $attributesWithDefault['imageAlt']);

    if(in_array("xxs", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xxs", "true");
    }

    if(in_array("xs", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xs", "true");
    }

    if(in_array("sm", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-sm", "true");
    }

    if(in_array("md", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-md", "true");
    }

    if(in_array("lg", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-lg", "true");
    }

    if(in_array("xl", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xl", "true");
    }

    if(in_array("xxl", $attributesWithDefault["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xxl", "true");
    }
?>
<?= $domDocument->saveHTML($image) ?>
