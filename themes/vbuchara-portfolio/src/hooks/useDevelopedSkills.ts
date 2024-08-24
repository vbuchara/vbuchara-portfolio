import { store as coreStore, type GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { SkillPost } from "wordpress-types";


export function useDevelopedSkills(developedSkills: number[], deps?: unknown[]){
    const skillPostType = useSelect((select) => {
        return select(coreStore).getPostType("skill");
    }, [...(deps || [])]);

    const skills = useSelect((select) => {
        const skills = select(coreStore).getEntityRecords("postType", "skill", {
            context: "view",
            per_page: -1,
            include: developedSkills
        } satisfies GetRecordsHttpQuery) as SkillPost[] | null;

        return skills?.toSorted((leftSkill, rightSkill) => {
            return developedSkills.indexOf(leftSkill.id) - developedSkills.indexOf(rightSkill.id);
        });
    }, [...(deps || [])]);

    return {
        skillsArchive: skillPostType?.archive_link,
        skillPostType: skillPostType,
        skills: skills
    };
}