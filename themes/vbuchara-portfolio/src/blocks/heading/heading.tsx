import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { heading } from "@wordpress/icons";

import { WhiteSpaceValue } from "@constants/block-styles";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<HeadingAttributesType>;

export type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5";

export type HeadingAlignment = "left" | "center" | "right";

export interface HeadingStyles {
    lineHeight: string,
    whiteSpace: WhiteSpaceValue,
    underlineColor?: string,
    underlineGradient?: string
}

export type HeadingAttributesType = {
    tagName: HeadingTagName,
    textAlignment: HeadingAlignment,
    textContent: string,
    extraClasses: string[],
    styles: HeadingStyles
};

registerBlockType<HeadingAttributesType>(block.name, {
    ...block,
    attributes: {
        tagName: {
            type: "string",
            default: "h1",
        },
        textContent: {
            type: "string",
            default: "",
        },
        textAlignment: {
            type: "string",
            default: "left"
        },
        extraClasses: {
            type: "array",
            default: []
        },
        styles: {
            type: "object",
            default: {
                lineHeight: "1.5",
                whiteSpace: "normal"
            } satisfies HeadingStyles
        }
    },
    icon: heading,
    edit: EditComponent
});