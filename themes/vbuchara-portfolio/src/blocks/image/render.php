<?php 
     use VBucharaPortfolio\Classes\InlineStyle;
     use VBucharaPortfolio\Helpers\BlockHelpers;

    /**
     * @var array{
     *  imageId: int,
     *  imageUrl: string,
     *  imageAlt: string,
     *  hideImageAtBreakpoints: string[],
     *  styles?: array{
     *      metrics: array{
     *          minWidth?: string,
     *          width?: string,
     *          maxWidth?: string,
     *          minHeight?: string,
     *          height?: string,
     *          maxHeight?: string,
     *      },
     *      position: array{
     *          position?: string,
     *          top?: string,
     *          bottom?: string,
     *          left?: string,
     *          right?: string,
     *          zIndex?: number,
     *      }
     *  },
     *  className?: string
     * } $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultAttributes = [
        "imageId" => 0,
        "imageUrl" => get_theme_file_uri("/assets/images/front-image.png"),
        "imageAlt" => "Image of a guy sitting on a chair, in front of a computer coding",
        "hideImageAtBreakpoints" => [],
        "styles" => [
            "metrics" => BlockHelpers::get_default_metrics_style(),
            "position" => BlockHelpers::get_default_position_style()
        ],
        "className" => null
    ];

    /**
     * @var array{
     *  imageId: int,
     *  imageUrl: string,
     *  imageAlt: string,
     *  hideImageAtBreakpoints: string[],
     *  styles: array{
     *          metrics: array{
     *              minWidth: string | null,
     *              width: string | null,
     *              maxWidth: string | null,
     *              minHeight: string | null,
     *              height: string | null,
     *              maxHeight: string | null,
     *          },
     *          position: array{
     *              position: string | null,
     *              top: string | null,
     *              bottom: string | null,
     *              left: string | null,
     *              right: string | null,
     *              zIndex: number | null,
     *          }
     *      },
     *      className: string | null
     *  }
     * }
     */
    $attributesWithDefaults = array_replace_recursive($defaultAttributes, $attributes);

    $className = $attributesWithDefaults["className"];

    $domDocument = new DOMDocument();
    $image = $domDocument->createElement("img");

    $image->setAttribute("class", "portfolio-image" . (!empty($className) ? " $className" : ""));
    $image->setAttribute("src", $attributesWithDefaults['imageUrl']);
    $image->setAttribute("alt", $attributesWithDefaults['imageAlt']);

    if(in_array("xxs", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xxs", "true");
    }

    if(in_array("xs", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xs", "true");
    }

    if(in_array("sm", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-sm", "true");
    }

    if(in_array("md", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-md", "true");
    }

    if(in_array("lg", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-lg", "true");
    }

    if(in_array("xl", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xl", "true");
    }

    if(in_array("xxl", $attributesWithDefaults["hideImageAtBreakpoints"])){
        $image->setAttribute("data-hide-on-xxl", "true");
    }

    $styles = $attributesWithDefaults["styles"];

    $containerStyle = new InlineStyle();

    BlockHelpers::set_metrics_style_variables($containerStyle, $styles["metrics"]);
    BlockHelpers::set_position_style_variables($containerStyle, $styles["position"]);

    $image->setAttribute("style", $containerStyle->getStyleString());
?>
<?= $domDocument->saveHTML($image) ?>
