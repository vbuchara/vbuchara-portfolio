import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Folder } from "@assets/svgs/folder.svg";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ArchiveProjectsAttributesType>;

export type ArchiveProjectsAttributesType = {};

registerBlockType<ArchiveProjectsAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: () => <Folder fill="currentColor" />,
    edit: EditComponent
});