import { useRef } from "react";
import type { ProjectPost } from "wordpress-types";

import ProjectDefaultImageSrc from "@assets/images/project-default-image.png";

import { EditorAnchor } from "@components/editor-anchor";

import { useTextScrollAnimation } from "@hooks/useTextScrollAnimation";

export interface ProjectCardProps {
    project: ProjectPost,
    classPrefix: string,
    projectArchiveLink?: string,
    idPrefix?: string,
}

export function ProjectCard(props: ProjectCardProps){
    const { 
        project, 
        classPrefix, 
        projectArchiveLink,
        idPrefix
    } = props;

    const projectImage = project.acf.project_image?.size_urls["project-image"] || ProjectDefaultImageSrc;
    const projectImageAlt = project.acf.project_image?.alt || "No image for the project provided";

    const projectLink = projectArchiveLink ? `${projectArchiveLink}#${project.slug}` : "";

    const projectHtmlId = idPrefix ? `${idPrefix}-${project.slug}` : `project-card-${project.slug}`;

    const projectLinkRef = useRef<HTMLAnchorElement>(null);

    const { startScrollLeft, revertScroll } = useTextScrollAnimation(projectLinkRef);
    
    return (
    <div 
        id={projectHtmlId}
        className={`${classPrefix}__card`}
    >
        <img
            className={`${classPrefix}__card-image`}
            src={projectImage}
            alt={projectImageAlt}
        />
        <span 
            className={`${classPrefix}__card-title`}
            onFocus={startScrollLeft}
            onBlur={revertScroll}
            onMouseOver={startScrollLeft}
            onMouseLeave={revertScroll}
        >
            <EditorAnchor 
                className={`${classPrefix}__card-title-link`}
                href={projectLink}
                ref={projectLinkRef}
            >
                {project.title.rendered}
            </EditorAnchor>
        </span>
    </div>
    );
}