import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { button } from "@wordpress/icons";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ButtonAttributesType>;

export interface ButtonStyles {
    backgroundColor?: string,
    backgroundGradient?: string,
    borderColor?: string,
    borderGradient?: string,
    color: string,
    borderWidth: string,
}

export type ButtonAttributesType = {
    textContent: string,
    linkUrl: string,
    extraClasses: string[],
    styles: ButtonStyles,
};

registerBlockType<ButtonAttributesType>(block.name, {
    ...block,
    attributes: {
        textContent: {
            type: "string",
            default: "Button Text"
        },
        linkUrl: {
            type: "string",
            default: ""
        },
        extraClasses: {
            type: "array",
            default: []
        },
        styles: {
            type: "object",
            default: {
                backgroundColor: "#14003fff",
                color: "#f7f4f3ff",
                borderWidth: "2px"                
            } satisfies ButtonStyles
        }
    },
    icon: button,
    edit: EditComponent
});