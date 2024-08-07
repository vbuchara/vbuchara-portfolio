import type { SkillPost, SkillPostCustomFields } from "wordpress-types";

export const skillLevelMap = new Map<SkillPostCustomFields["skill_level"], string>([
    ["1_beginner", "Beginner"],
    ["2_intermediary", "Intermediary"],
    ["3_advanced", "Advanced"]
]);

export function getSkillLevel(skill: SkillPost){
    return skillLevelMap.get(skill.acf.skill_level)!;
}