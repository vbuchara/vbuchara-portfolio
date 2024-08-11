import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMeasure } from "react-use";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, type GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import type { ProjectPost } from "wordpress-types";
import debounce from "lodash/debounce";
import clsx from "clsx";

import { EditorWrapper } from "@components/editor-wrapper";

import { getArrayDependency } from "@utils/getArrayDependency";
import { hasElementTotallyScrolled } from "@utils/hasElementTotallyScrolled";

import { ProjectsInspectorControls } from "./components/controls";
import { ProjectCard } from "./components/project-card";

import type { ProjectsAttributesType } from "./projects";

export type ProjectsEditComponentProps = BlockEditProps<ProjectsAttributesType>;

export function EditComponent(props: ProjectsEditComponentProps){
    const { attributes, setAttributes } = props;

    const projectPostType = useSelect((select) => {
        return select(coreStore).getPostType("project");
    }, []);

    const projects = useSelect((select) => {
        return select(coreStore).getEntityRecords("postType", "project", {
            context: "view",
            per_page: -1,
            order: "desc",
            orderby: "title",
        } satisfies GetRecordsHttpQuery) as ProjectPost[] | null;
    }, []);

    const projectsToShow = useMemo(() => {
        if(!attributes.showSpecificProjects){
            return projects?.slice(0, attributes.projectsQuantity);
        }

        const projectsSelected = projects
            ?.filter(project => attributes.projectsIdsToShow.includes(project.id))
            .toSorted((leftProject, rightProject) => {
                const { projectsIdsToShow } = attributes;

                return projectsIdsToShow.indexOf(leftProject.id) - projectsIdsToShow.indexOf(rightProject.id);
            });

        return projectsSelected?.slice(0, attributes.projectsQuantity);
    }, [
        attributes.showSpecificProjects,
        attributes.projectsQuantity,
        getArrayDependency(attributes.projectsIdsToShow),
        projects
    ]);
    
    const mainDivRef = useRef<HTMLDivElement | null>(null);
    const portfolioCardsRef = useRef<HTMLDivElement | null>(null);
    
    const [mainDivMeasureRef, mainDivMeasure] = useMeasure<HTMLDivElement>();
    const [portfolioCardsMeasureRef, portfolioCardsMeasure] = useMeasure<HTMLDivElement>();

    const [cardsScrollLeft, setCardsScrollLeft] = useState(0);

    const activeScroll = useMemo(() => {
        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement) return false;
        const divPadding = 10;

        return cardsDivElement.scrollWidth - divPadding > cardsDivElement.clientWidth;
    }, [mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);

    const activeScrollLeft = useMemo(() => {
        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement) return false;

        return activeScroll && cardsDivElement.scrollLeft > 0;
    }, [activeScroll, mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);

    const activeScrollRight = useMemo(() => {
        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement) return false;

        return activeScroll && !hasElementTotallyScrolled(cardsDivElement, "horizontal");
    }, [activeScroll, mainDivMeasure.width, portfolioCardsMeasure.width, cardsScrollLeft]);

    const portfolioProjectsClasses = useMemo(() => {
        return clsx({
            "portfolio-projects": true,
            "portfolio-projects--with-scroll": activeScrollLeft || activeScrollRight,
        });
    }, [activeScrollLeft, activeScrollRight]);

    const scrollLeftClasses = useMemo(() => {
        return clsx({
            "portfolio-projects__scroll-left": true,
            "portfolio-projects__scroll-left--disabled": !activeScrollLeft
        });
    }, [activeScrollLeft]);

    const scrollRightClasses = useMemo(() => {
        return clsx({
            "portfolio-projects__scroll-right": true,
            "portfolio-projects__scroll-right--disabled": !activeScrollRight
        });
    }, [activeScrollRight]);

    const debouncedHandleOnScrollCards = useCallback(
        debounce(handleOnScrollCards, 10, { leading: true }),
        []
    );

    function handleOnScrollCards(){
        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement) return;

        setCardsScrollLeft(cardsDivElement.scrollLeft);
    }

    function handleScrollLeft(){
        if(!activeScrollLeft) return;

        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement || cardsDivElement.scrollLeft <= 0) return;

        const cardsBoundingRect = cardsDivElement.getBoundingClientRect();

        const cardsElements = cardsDivElement.querySelectorAll<HTMLElement>(".portfolio-projects__card");
        const firstCardOutOfView = Array.from(cardsElements).toReversed().find((card) => {
            const cardBoundingRect = card.getBoundingClientRect();
            
            return Math.floor(cardBoundingRect.left + 1) < Math.floor(cardsBoundingRect.left);
        });
        const firstChildElement = cardsDivElement.firstElementChild;

        if(firstCardOutOfView && firstCardOutOfView !== firstChildElement){
            firstCardOutOfView.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest"
            });
            return;
        }

        cardsDivElement.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollRight(){
        if(!activeScrollRight) return;

        const cardsDivElement = portfolioCardsRef.current;
        if(!cardsDivElement || hasElementTotallyScrolled(cardsDivElement, "horizontal")) return;

        const cardsBoundingRect = cardsDivElement.getBoundingClientRect();

        const cardsElements = cardsDivElement.querySelectorAll<HTMLElement>(".portfolio-projects__card");
        const firstCardOutOfView = Array.from(cardsElements).find((card) => {
            const cardBoundingRect = card.getBoundingClientRect();
            
            return Math.floor(cardBoundingRect.right - 1) > Math.floor(cardsBoundingRect.right);
        });
        const lastChildElement = cardsDivElement.lastElementChild;

        if(firstCardOutOfView && firstCardOutOfView !== lastChildElement){
            firstCardOutOfView.scrollIntoView({
                behavior: "smooth",
                inline: "end",
                block: "nearest"
            });
            return;
        }

        cardsDivElement.scrollTo({
            left: cardsDivElement.scrollWidth,
            behavior: "smooth",
        });
    }

    return (
    <EditorWrapper>
        <ProjectsInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            projects={projects}
        />
        <div 
            className={portfolioProjectsClasses}
            ref={(element) => {
                if(!element) return;

                mainDivMeasureRef(element);
                mainDivRef.current = element;
            }}
        >
            <button
                type="button"
                className={scrollLeftClasses}
                onClick={handleScrollLeft}
                disabled={!activeScrollLeft}
            >{"<"}</button>
            <div 
                className="portfolio-projects__cards"
                onScroll={debouncedHandleOnScrollCards}
                ref={(element) => {
                    if(!element) return;

                    portfolioCardsMeasureRef(element);
                    portfolioCardsRef.current = element;
                }}
            >
                {projectsToShow?.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    classPrefix="portfolio-projects"
                    projectArchiveLink={projectPostType?.archive_link}
                    idPrefix="portfolio-projects__card"
                />
                ))}
            </div>
            <button
                type="button"
                className={scrollRightClasses}
                onClick={handleScrollRight}
                disabled={!activeScrollRight}
            >{">"}</button>
        </div>
    </EditorWrapper>
    );
}