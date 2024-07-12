import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";
import { header } from "@wordpress/icons";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<HeaderAttributesType>;

export type HeaderAttributesType = {};

registerBlockType<HeaderAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: header,
    edit: EditComponent
});