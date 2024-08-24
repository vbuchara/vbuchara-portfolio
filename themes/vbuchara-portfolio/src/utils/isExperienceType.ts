import type { EducationalExperiencePost, WorkExperiencePost } from "wordpress-types";

export function isWorkExperience(value: any): value is WorkExperiencePost{
    return typeof value === "object"
        && value !== null
        && "type" in value
        && value.type === "experience"
        && "acf" in value
        && "type" in value.acf
        && value.acf.type === "work";
}

export function isEducationalExperience(value: any): value is EducationalExperiencePost {
    return typeof value === "object"
        && value !== null
        && "type" in value
        && value.type === "experience"
        && "acf" in value
        && "type" in value.acf
        && value.acf.type === "educational";
}