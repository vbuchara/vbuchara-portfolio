import { format, parse } from "date-fns";
import type { WorkExperiencePost } from "wordpress-types";
import SVG from "react-inlinesvg";

import { EditorAnchor } from "@components/editor-anchor";

import { useDevelopedSkills } from "@hooks/useDevelopedSkills";

import { getTitle } from "@utils/getTitle";

export interface WorkExperienceItemProps {
    experience: WorkExperiencePost,
    classPrefix?: string,
    htmlId?: string,
    isSkillPage?: boolean,
}

export function WorkExperienceItem(props: WorkExperienceItemProps){
    const { experience, htmlId, isSkillPage } = props;

    const classPrefix = props.classPrefix ? props.classPrefix : "portfolio-experiences";
    const periodStartDate = parse(experience.acf.period_start, "yyyyMMdd", new Date());
    const periodEndDate = parse(experience.acf.period_end, "yyyyMMdd", new Date());

    const { skillsArchive, skills } = useDevelopedSkills(experience.acf.developed_skills, [
        props.experience.acf.type
    ]);

    return (
    <div 
        className={`${classPrefix}__item ${classPrefix}__item--work`}
        id={htmlId}
    >
        <h3 className={`${classPrefix}__item-title`}>
            {getTitle(experience)}
        </h3>
        <h4 className={`${classPrefix}__item-subtitle`}>
            Period: {format(periodStartDate, "MM/yyyy")} to {format(periodEndDate, "MM/yyyy")}
        </h4>
        <h4 className={`${classPrefix}__item-subtitle`}>
            Company: {experience.acf.company}
        </h4>
        <p className={`${classPrefix}__item-description`}>
            {experience.acf.description}
        </p>
        <div className={`${classPrefix}__item-skills`}>
            <h5 className={`${classPrefix}__item-skills-title`}>Skills for this project:</h5>
            <ul className={`${classPrefix}__item-skills-list`}>
                {skills?.map(skill => (
                <li
                    key={skill.id}
                    className={`${classPrefix}__item-skills-item`}
                >
                    <EditorAnchor 
                        className={`${classPrefix}__item-skills-link`}
                        href={`${isSkillPage ? (skillsArchive || "") : ""}#${skill.slug}`}
                        title={getTitle(skill)}
                    >
                        <SVG
                            className={`${classPrefix}__item-skills-icon`}
                            src={skill.acf.skill_icon}
                            color="inherit"
                            fill="currentColor"
                        />
                    </EditorAnchor>
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}