import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import type { ExperienceType } from "wordpress-types";

import { ReactComponent as Experience } from "@assets/svgs/experience.svg";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ExperiencesAttributesType>;

export type ExperiencesAttributesType = {
    experiencesType?: ExperienceType,
};

registerBlockType<ExperiencesAttributesType>(block.name, {
    ...block,
    icon: () => <Experience fill="currentColor"/>,
    attributes: {
        experiencesType: {
            type: "string",
        },
    },
    edit: EditComponent
});