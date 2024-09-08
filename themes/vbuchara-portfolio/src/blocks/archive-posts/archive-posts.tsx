import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ArchivePostsAttributesType>;

export type ArchivePostsAttributesType = {};

registerBlockType<ArchivePostsAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: "admin-post",
    edit: EditComponent
});