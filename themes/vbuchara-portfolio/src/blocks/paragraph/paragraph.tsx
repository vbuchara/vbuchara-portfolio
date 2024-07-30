import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { paragraph } from "@wordpress/icons";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ParagraphAttributesType>;

export interface ParagraphStyles {
    color?: string,
    fontSize?: string,
};

export type ParagraphAttributesType = {
    textContent: string,
    styles: ParagraphStyles,
    extraClasses: string[]
};

registerBlockType<ParagraphAttributesType>(block.name, {
    ...block,
    attributes: {
        textContent: {
            type: "string",
            default: ""
        },
        styles: {
            type: "object",
            default: {
                color: "#0F0D0D",
                fontSize: "inherit",
            } satisfies ParagraphStyles,
        },
        extraClasses: {
            type: "array",
            default: []
        },
    },
    icon: paragraph,
    edit: EditComponent
});