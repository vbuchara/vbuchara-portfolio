import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { header } from "@wordpress/icons";

import { EditorMenuItemType } from "@components/editor-menu-item";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<HeaderAttributesType>;

export type HeaderAttributesType = {
    menuItems: EditorMenuItemType[]
};

registerBlockType<HeaderAttributesType>(block.name, {
    ...block,
    attributes: {
        menuItems: {
            type: "array",
            default: []
        }
    },
    icon: header,
    edit: EditComponent
});