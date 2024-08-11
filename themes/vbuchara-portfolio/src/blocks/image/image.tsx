

import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { image } from "@wordpress/icons";

import FrontImageSrc from "@assets/images/front-image.png";

import type { BreakpointsValue } from "@constants/block-breakpoints";
import type { MetricsStyles } from "@components/editor-metrics-settings";
import type { PositionStyles } from "@components/editor-position-settings";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ImageAttributesType>;

export interface ImageStyles {
    metrics: MetricsStyles
    position: PositionStyles
}

export type ImageAttributesType = {
    imageId: number,
    imageUrl: string,
    imageAlt: string,
    hideImageAtBreakpoints: BreakpointsValue[],
    styles: ImageStyles,
};

registerBlockType<ImageAttributesType>(block.name, {
    ...block,
    attributes: {
        imageId: {
            type: "number",
            default: 0 
        },
        imageUrl: {
            type: "string",
            default: FrontImageSrc
        },
        imageAlt: {
            type: "string",
            default: "Image of a guy sitting on a chair, in front of a computer, and coding"
        },
        hideImageAtBreakpoints: {
            type: "array",
            default: []
        },
        styles: {
            type: "object",
            default: {
                metrics: {},
                position: {},
            } satisfies ImageStyles,
        }
    },
    icon: image,
    edit: EditComponent
});