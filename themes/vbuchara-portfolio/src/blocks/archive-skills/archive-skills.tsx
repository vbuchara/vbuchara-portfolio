import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Skill } from "@assets/svgs/skill.svg";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ArchiveSkillsAttributesType>;

export type ArchiveSkillsAttributesType = {};

registerBlockType<ArchiveSkillsAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: () => <Skill fill="currentColor" />,
    edit: EditComponent
});