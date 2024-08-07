import { useMemo } from "react";
import type { MultiValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    BaseControl,
    CheckboxControl,
    PanelBody,
    PanelRow,
    ToolbarGroup,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import type { ProjectPost } from "wordpress-types";

import { EditorSortableSelect } from "@components/editor-sortable-select";

import type { ProjectsEditComponentProps } from "../edit";

export type ProjectsControlsProps = Pick<
    ProjectsEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ProjectOption {
    id: number;
    label: string;
    value: ProjectPost
}

export interface ProjectsInspectorControlsProps extends ProjectsControlsProps {
    projects: ProjectPost[] | null; 
};

export function ProjectsInspectorControls({
    attributes,
    setAttributes,
    projects
}: ProjectsInspectorControlsProps){
    const projectsOptions = useMemo(() => {
        return projects?.map<ProjectOption>(project => ({
            id: project.id,
            label: project.title.rendered,
            value: project
        }));
    }, [projects]);

    const projectsSelected = projectsOptions
        ?.filter(projectOption => attributes.projectsIdsToShow.includes(projectOption.value.id))
        .toSorted((leftProjectOption, rightProjectOption) => {
            const { projectsIdsToShow } = attributes;

            return projectsIdsToShow.indexOf(leftProjectOption.id) - projectsIdsToShow.indexOf(rightProjectOption.id)
        });

    function setProjectsToShow(options: MultiValue<ProjectOption>){
        setAttributes({
            projectsIdsToShow: options.map(option => option.value.id)
        });
    }

    function handleOnChangeProjectsQuantity(value?: string){
        setAttributes({ 
            projectsQuantity: value ? Number(value) : undefined 
        });
    }

    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Settings"
            initialOpen={true}
        >
            <PanelRow>
                <NumberControl
                    label="Number of Projects to Show"
                    className="portfolio-projects__editor-control"
                    value={attributes.projectsQuantity}
                    onChange={handleOnChangeProjectsQuantity}
                    step={1}
                    min={0}
                />
            </PanelRow>
            <PanelRow>
                <CheckboxControl
                    label="Show Specific Projects?"
                    className="portfolio-projects__editor-control"
                    checked={attributes.showSpecificProjects}
                    onChange={(value) => setAttributes({ showSpecificProjects: value })}
                />
            </PanelRow>
            {!attributes.showSpecificProjects ? "" : (
            <BaseControl
                label="Projects to Show"
                className="portfolio-projects__editor-control"
            >
                <EditorSortableSelect
                    isLoading={!projectsOptions}
                    options={projectsOptions}
                    value={projectsSelected}
                    onChange={setProjectsToShow}
                    setValue={setProjectsToShow}
                />
            </BaseControl>
            )}
        </PanelBody>
    </InspectorControls>
    );
}

export interface ProjectsBlockControlsProps extends ProjectsControlsProps {};

export function ProjectsBlockControls({
    attributes,
    setAttributes
}: ProjectsBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}