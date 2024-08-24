import type { SingleValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    BaseControl,
    PanelBody,
    PanelRow,
    ToolbarGroup 
} from "@wordpress/components";
import type { ExperienceType } from "wordpress-types";

import { EditorSelect } from "@components/editor-select";

import { ExperiencesEditComponentProps } from "../edit";

export type ExperiencesControlsProps = Pick<
    ExperiencesEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ExperiencesInspectorControlsProps extends ExperiencesControlsProps {};

export interface ExperienceTypeOption {
    label: string;
    value?: ExperienceType
}

export function ExperiencesInspectorControls({
    attributes,
    setAttributes,
}: ExperiencesInspectorControlsProps){
    const experienceTypeOptions = [
        { label: "All Experiences", value: undefined },
        { label: "Work Experiences", value: "work" },
        { label: "Educational Experiences", value: "educational" },
    ] as const satisfies ExperienceTypeOption[];

    const selectedExperience = experienceTypeOptions
        .find(option => option.value === attributes.experiencesType) || experienceTypeOptions[0];

    function handleOnChangeExperienceType(value: SingleValue<ExperienceTypeOption>){
        setAttributes({ experiencesType: value?.value });
    }

    return (
    <InspectorControls>
        <PanelBody
            title="Configuration"
            initialOpen={true}
        >
            <PanelRow>
                <BaseControl
                    className="portfolio-editor__control"
                    label="Shows Experiences of Type"
                >
                    <EditorSelect
                        type="select"
                        value={selectedExperience}
                        options={experienceTypeOptions}
                        onChange={handleOnChangeExperienceType}
                    />
                </BaseControl>
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface ExperiencesBlockControlsProps extends ExperiencesControlsProps {};

export function ExperiencesBlockControls({
    attributes,
    setAttributes
}: ExperiencesBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}