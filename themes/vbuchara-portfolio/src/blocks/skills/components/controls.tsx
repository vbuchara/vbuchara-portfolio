import { useMemo } from "react";
import type { MultiValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls,
} from "@wordpress/block-editor";
import { 
    BaseControl,
    CheckboxControl,
    PanelBody,
    PanelRow,
    ToolbarGroup,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import type { SkillPost } from "wordpress-types";

import { EditorSortableSelect } from "@components/editor-sortable-select";

import { SkillsEditComponentProps } from "../edit";

export type SkillsControlsProps = Pick<
    SkillsEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface SkillOption {
    id: number;
    label: string;
    value: SkillPost
}

export interface SkillsInspectorControlsProps extends SkillsControlsProps {
    skills: SkillPost[] | null,
};

export function SkillsInspectorControls({
    attributes,
    setAttributes,
    skills
}: SkillsInspectorControlsProps){

    const skillsOptions = useMemo(() => {
        return skills?.map<SkillOption>(skill => ({
            id: skill.id,
            label: skill.title.rendered,
            value: skill
        }))
    }, [skills]);

    const skillsSelected = skillsOptions
        ?.filter(skillOption => attributes.skillsIdsToShow.includes(skillOption.value.id))
        .toSorted((leftSkillOption, rightSkillOption) => {
            const { skillsIdsToShow } = attributes;

            return skillsIdsToShow.indexOf(leftSkillOption.id) - skillsIdsToShow.indexOf(rightSkillOption.id)
        });

    function setSkillsToShow(options: MultiValue<SkillOption>){
        setAttributes({
            skillsIdsToShow: options.map(option => option.value.id)
        });
    }

    function handleOnChangeSkillsQuantity(value?: string){
        setAttributes({ 
            skillsQuantity: value ? Number(value) : undefined 
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
                    label="Number of Skills to Show"
                    className="portfolio-skills__editor-control"
                    value={attributes.skillsQuantity}
                    onChange={handleOnChangeSkillsQuantity}
                    step={1}
                    min={0}
                />
            </PanelRow>
            <PanelRow>
                <CheckboxControl
                    label="Show Specific Skills?"
                    className="portfolio-skills__editor-control"
                    checked={attributes.showSpecificSkills}
                    onChange={(value) => setAttributes({ showSpecificSkills: value })}
                />
            </PanelRow>
            {!attributes.showSpecificSkills ? "" : (
            <BaseControl
                label="Skills to Show"
                className="portfolio-skills__editor-control"
            >
                <EditorSortableSelect
                    isLoading={!skillsOptions}
                    options={skillsOptions}
                    value={skillsSelected}
                    onChange={setSkillsToShow}
                    setValue={setSkillsToShow}
                />
            </BaseControl>
            )}
        </PanelBody>
    </InspectorControls>
    );
}

export interface SkillsBlockControlsProps extends SkillsControlsProps {};

export function SkillsBlockControls({
    attributes,
    setAttributes
}: SkillsBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}