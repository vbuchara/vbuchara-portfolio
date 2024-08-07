import { useMemo } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, type GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { SkillPost } from "wordpress-types";

import { EditorWrapper } from "@components/editor-wrapper";

import { getArrayDependency } from "@utils/getArrayDependency";

import { SkillCard } from "./components/skill-card";
import { SkillsInspectorControls } from "./components/controls";

import { SkillsAttributesType } from "./skills"; 

export type SkillsEditComponentProps = BlockEditProps<SkillsAttributesType>;

export function EditComponent(props: SkillsEditComponentProps){
    const { attributes, setAttributes } = props;

    const skills = useSelect((select) => {
        return select(coreStore).getEntityRecords("postType", "skill", {
            context: "view",
            per_page: -1,
            order: "desc",
            orderby: "meta_value",
            meta_key: "skill_level"
        } satisfies GetRecordsHttpQuery) as SkillPost[] | null;
    }, []);

    const skillsToShow = useMemo(() => {
        if(!attributes.showSpecificSkills){
            return skills?.slice(0, attributes.skillsQuantity);
        }

        const skillsSelected = skills
            ?.filter(skill => attributes.skillsIdsToShow.includes(skill.id))
            .toSorted((leftSkill, rightSkill) => {
                const { skillsIdsToShow } = attributes;

                return skillsIdsToShow.indexOf(leftSkill.id) - skillsIdsToShow.indexOf(rightSkill.id);
            });

        return skillsSelected?.slice(0, attributes.skillsQuantity);
    }, [
        attributes.skillsQuantity, 
        attributes.showSpecificSkills,
        getArrayDependency(attributes.skillsIdsToShow),
        skills
    ]);

    return (
    <EditorWrapper>
        <SkillsInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            skills={skills}
        />
        <div className="portfolio-skills">
            {skillsToShow?.map(skill => (
            <SkillCard
                key={skill.id}
                skill={skill}
                classPrefix="portfolio-skills"
            />
            ))}
        </div>
    </EditorWrapper>
    );
}