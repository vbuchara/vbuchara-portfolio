import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, type GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { SkillPost } from "wordpress-types";

import { SkillCard } from "@blocks/skills/components/skill-card";

import { EditorWrapper } from "@components/editor-wrapper";

import type { ArchiveSkillsAttributesType } from "./archive-skills";

export type ArchiveSkillsEditComponentProps = BlockEditProps<ArchiveSkillsAttributesType>;

export function EditComponent(props: ArchiveSkillsEditComponentProps){
    const { attributes, setAttributes } = props;

    const skills = useSelect((select) => {
        return select(coreStore).getEntityRecords("postType", "skill", {
            context: "view",
            per_page: -1,
        } satisfies GetRecordsHttpQuery) as SkillPost[] | null;
    }, []);

    return (
    <EditorWrapper>
        <div className="portfolio-archive-skills">
            {skills?.map(skill => (
            <SkillCard
                key={skill.id}
                skill={skill}
                classPrefix="portfolio-archive-skills"
                htmlId={skill.slug}
            />
            ))}
        </div>
    </EditorWrapper>
    );
}