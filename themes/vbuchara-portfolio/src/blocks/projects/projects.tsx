import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Folder } from "@assets/svgs/folder.svg";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ProjectsAttributesType>;

export type ProjectsAttributesType = {
    projectsQuantity?: number,
    showSpecificProjects: boolean,
    projectsIdsToShow: number[],
};

registerBlockType<ProjectsAttributesType>(block.name, {
    ...block,
    attributes: {
        projectsQuantity: {
            type: "number",
        },
        showSpecificProjects: {
            type: "boolean",
            default: false,
        },
        projectsIdsToShow: {
            type: "array",
            default: [],
        },
    },
    icon: () => <Folder fill="currentColor" />,
    edit: EditComponent
});