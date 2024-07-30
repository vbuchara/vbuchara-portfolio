import { registerFormatType } from "@wordpress/rich-text";
import { TextColorEditComponent } from "./edit";

export interface TextColorAttributes {
    style: string;
}

registerFormatType("vbuchara-portfolio/text-color", {
    title: "Text Color",
    name: "vbuchara-portfolio/text-color",
    tagName: "span",
    interactive: false,
    className: "portfolio-formats__text-color",
    attributes: {
        style: "style"
    },
    edit: TextColorEditComponent,
});