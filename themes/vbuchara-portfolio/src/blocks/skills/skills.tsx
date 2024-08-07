import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Skill } from "@assets/svgs/skill.svg";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<SkillsAttributesType>;

export type SkillsAttributesType = {
    skillsQuantity?: number,
    showSpecificSkills: boolean,
    skillsIdsToShow: number[],
};

registerBlockType<SkillsAttributesType>(block.name, {
    ...block,
    attributes: {
        skillsQuantity: {
            type: "number",
            default: undefined
        },
        showSpecificSkills: {
            type: "boolean",
            default: false
        },
        skillsIdsToShow: {
            type: "array",
            default: [],
        }
    },
    icon: () => <Skill fill="currentColor" />,
    edit: EditComponent
});