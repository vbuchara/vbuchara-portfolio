import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { ExperiencePost } from "wordpress-types";

import { EditorWrapper } from "@components/editor-wrapper";

import { isEducationalExperience, isWorkExperience } from "@utils/isExperienceType";

import type { ExperiencesAttributesType } from "./experiences";
import { WorkExperienceItem } from "./components/work-experience-item";
import { EducationalExperienceItem } from "./components/educational-experience-item";
import { ExperiencesInspectorControls } from "./components/controls";

export type ExperiencesEditComponentProps = BlockEditProps<ExperiencesAttributesType>;

export function EditComponent(props: ExperiencesEditComponentProps){
    const { attributes, setAttributes } = props;

    const experiences = useSelect((select) => {
        return select(coreStore).getEntityRecords("postType", "experience",{
            context: "view",
            per_page: -1,
            ...(attributes.experiencesType ? {
                meta_query_key: "type",
                meta_query_compare: "LIKE",
                meta_query_value: attributes.experiencesType,
                meta_query_type: "CHAR"
            } : {})
        } satisfies GetRecordsHttpQuery) as ExperiencePost[] | null;
    }, [attributes.experiencesType]);
    
    return (
    <EditorWrapper>
        <ExperiencesInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div className="portfolio-experiences">
            {experiences?.map((experience) => {
                if(isWorkExperience(experience)){
                    return (
                    <WorkExperienceItem
                        key={experience.id}
                        experience={experience}
                        isSkillPage={true}
                    />
                    )
                }

                if(isEducationalExperience(experience)){
                    return (
                    <EducationalExperienceItem
                        key={experience.id}
                        experience={experience}
                        isSkillPage={true}
                    />
                    );
                }
            })}
        </div>
    </EditorWrapper>
    );
}