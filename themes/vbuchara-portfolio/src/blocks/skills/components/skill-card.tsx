import SVG from "react-inlinesvg";
import type { SkillPost } from "wordpress-types";
import clsx from "clsx";

import { ReactComponent as Folder } from "@assets/svgs/folder.svg";

import { getSkillLevel } from "@utils/getSkillLevel";

export interface SkillCardProps {
    skill: SkillPost,
    classPrefix: string
}

export function SkillCard(props: SkillCardProps){
    const { skill, classPrefix } = props;
    const skillCardClasses = clsx({ 
        [`${classPrefix}__card`]: true, 
        [`${classPrefix}__card--animated`]: true
    });

    return (
    <div 
        className={skillCardClasses}
    >
        <div className={`${classPrefix}__card-front`}>
            <SVG
                src={skill.acf.skill_icon}
                className={`${classPrefix}__card-front-icon`}
                fill="currentColor"
            />
            <h3 className={`${classPrefix}__card-front-title`}>
                {skill.title.rendered}
            </h3>
        </div>
        <div className={`${classPrefix}__card-back`}>
            <h3 className={`${classPrefix}__card-back-title`}>
                Level: {getSkillLevel(skill)}
            </h3>
            <a className={`${classPrefix}__card-back-link`}>
                <Folder
                    className={`${classPrefix}__card-back-icon`}
                    fill="currentColor"
                />
                See Projects
            </a>
        </div>
    </div>
    );
}