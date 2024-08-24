import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersection, useMeasure } from "react-use";
import clsx from "clsx";
import type { ProjectPost } from "wordpress-types";
import SVG from "react-inlinesvg";

import ProjectDefaultImageSrc from "@assets/images/project-default-image.png";
import { ReactComponent as Github } from "@assets/svgs/github.svg";
import { ReactComponent as Site } from "@assets/svgs/site.svg";
import { ReactComponent as OpenEye } from "@assets/svgs/eye-open.svg";
import { ReactComponent as ClosedEye } from "@assets/svgs/eye-closed.svg";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorAnimatedElement } from "@components/editor-animated-element";

import { useDevelopedSkills } from "@hooks/useDevelopedSkills";

import { getTitle } from "@utils/getTitle";

export interface ProjectItemProps {
    project: ProjectPost,
    classPrefix?: string
}

export function ProjectItem(props: ProjectItemProps){
    const { project } = props;
    const classPrefix = props.classPrefix ? props.classPrefix : "portfolio-archive-projects";

    const projectImage = project.acf.project_image?.size_urls["project-image"] || ProjectDefaultImageSrc;
    const projectImageAlt = project.acf.project_image?.alt || "No image or alt text for the project provided";

    const { skills, skillsArchive } = useDevelopedSkills(project.acf.developed_skills);

    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
    const skillsListRef = useRef<HTMLUListElement | null>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    const [shouldExpandInfo, setShouldExpandInfo] = useState(false);
    const [shouldExpandSkills, setShouldExpandSkills] = useState(false);

    const [descriptionMeasureRef, descriptionMeasure] = useMeasure<HTMLElement>();
    const [skillsListMeasureRef, skillsListMeasure] = useMeasure<HTMLElement>();
    const [itemMeasureRef, itemMeasure] = useMeasure<HTMLDivElement>();

    const infoButtonExpandClasses = useMemo(() => {
        const descriptionElement = descriptionRef.current;
        const isOverflowing = descriptionElement &&
            descriptionElement.scrollHeight > descriptionElement.clientHeight;

        return clsx({
            [`${classPrefix}__item-expand`]: true,
            [`${classPrefix}__item-expand--visible`]: isOverflowing || shouldExpandInfo,
            [`${classPrefix}__item-expand--active`]: shouldExpandInfo,
        });
    }, [classPrefix, descriptionMeasure.width, descriptionMeasure.height, shouldExpandInfo]);

    const skillsButtonExpandClasses = useMemo(() => {
        const skillsListElement = skillsListRef.current;
        const isOverflowing = skillsListElement &&
            skillsListElement.scrollHeight > skillsListElement.clientHeight;

        return clsx({
            [`${classPrefix}__item-expand`]: true,
            [`${classPrefix}__item-expand--visible`]: isOverflowing || shouldExpandSkills,
            [`${classPrefix}__item-expand--active`]: shouldExpandSkills,
        });
    }, [classPrefix, skillsListMeasure.width, skillsListMeasure.height, shouldExpandSkills]);

    const infoDivClasses = useMemo(() => {
        return clsx({
            [`${classPrefix}__item-info`]: true,
            [`${classPrefix}__item-info--expanded`]: shouldExpandInfo
        });
    }, [shouldExpandInfo]);

    const skillsDivClasses = useMemo(() => {
        return clsx({
            [`${classPrefix}__item-skills`]: true,
            [`${classPrefix}__item-skills--expanded`]: shouldExpandSkills
        });
    }, [classPrefix, shouldExpandSkills]);

    const linksIntersectionEntry = useIntersection(
        linksRef,
        { root: null, threshold: 0.2 }
    );

    function handleOnClickExpandButtonInfo(){
        setShouldExpandInfo((prev) => !prev);
    }

    function handleOnClickExpandButtonSkills(){
        setShouldExpandSkills((prev) =>!prev);
    }

    useEffect(() => {
        setShouldExpandInfo(false);
        setShouldExpandSkills(false);
    }, [itemMeasure.width]);

    return (
    <div 
        id={project.slug}
        className={`${classPrefix}__item`}
        ref={itemMeasureRef}
    >
        <img
            className={`${classPrefix}__item-image`}
            src={projectImage}
            alt={projectImageAlt}
        />
        <div className={`${classPrefix}__item-content`}>
            <div className={infoDivClasses}>
                <h4 className={`${classPrefix}__item-title`}>{getTitle(project)}</h4>
                <button 
                    className={infoButtonExpandClasses}
                    onClick={handleOnClickExpandButtonInfo}
                >
                    {shouldExpandInfo ? (<OpenEye color="currentColor"/>) : (<ClosedEye color="currentColor"/>)}
                </button>
                <p 
                    className={`${classPrefix}__item-description`}
                    ref={(ref) => {
                        descriptionRef.current = ref;
                        if(!ref) return;
                        descriptionMeasureRef(ref);
                    }}
                >{project.acf.description}</p>
            </div>
            <div className={skillsDivClasses}>
                <h5 className={`${classPrefix}__item-skills-title`}>Skills for this project:</h5>
                <button 
                    className={skillsButtonExpandClasses}
                    onClick={handleOnClickExpandButtonSkills}
                >
                    {shouldExpandSkills ? (<OpenEye color="currentColor"/>) : (<ClosedEye color="currentColor"/>)}
                </button>
                <ul 
                    className={`${classPrefix}__item-skills-list`}
                    ref={(ref) => {
                        skillsListRef.current = ref;
                        if(!ref) return;
                        skillsListMeasureRef(ref);
                    }}
                >
                    {skills?.map(skill => (
                    <li
                        key={skill.id}
                        className={`${classPrefix}__item-skills-item`}
                    >
                        <EditorAnchor 
                            className={`${classPrefix}__item-skills-link`}
                            href={`${skillsArchive || ""}#${skill.slug}`}
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
            <div 
                className={`${classPrefix}__item-links`}
                ref={linksRef}
            >
                {!project.acf.project_github_link ? "" : (
                <EditorAnimatedElement
                    tagName="a"
                    animateClass={`${classPrefix}__item-links-link--animate`}
                    animationName="element-highlight-animation"
                    intersectionEntry={linksIntersectionEntry}
                    timeoutTime={5 * 1000}
                    
                    className={`${classPrefix}__item-links-link`}
                    href={project.acf.project_github_link}
                    target="_blank"
                    rel="noopener"
                    title="Project Github Repository"
                >
                    <Github 
                        className={`${classPrefix}__item-links-icon`} 
                        fill="currentColor"
                    />
                </EditorAnimatedElement>
                )}
                {!project.acf.project_site_link ? "" : (
                <EditorAnimatedElement
                    tagName="a"
                    animateClass={`${classPrefix}__item-links-link--animate`}
                    animationName="element-highlight-animation"
                    intersectionEntry={linksIntersectionEntry}
                    timeoutTime={5 * 1000}

                    className={`${classPrefix}__item-links-link`}
                    href={project.acf.project_site_link}
                    target="_blank"
                    rel="noopener"
                    title="Project Site"
                >
                    <Site 
                        className={`${classPrefix}__item-links-icon`} 
                        color="inherit"
                    />
                </EditorAnimatedElement>
                )}
            </div>
        </div>
    </div>
    );
}