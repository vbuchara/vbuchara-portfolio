import {
    getContext,
    getElement,
    store,
    useEffect,
} from "@wordpress/interactivity";

import { useInteractivityMeasure } from "@hooks/useInteractivityMeasure";
import { useInteractivityIntersection } from "@hooks/useInteractivityIntersection";

export interface ArchiveProjectsContext {};

export interface ArchiveProjectsProjectContext extends ArchiveProjectsContext{
    shouldExpandInfo: boolean,
    shouldExpandSkills: boolean,
    isInfoOverflowing: boolean,
    isSkillsOverflowing: boolean,
    isProjectLinksIntersecting: boolean,
};

export interface ArchiveProjectsLinksContext extends ArchiveProjectsProjectContext{
    shouldAnimate: boolean,
    repeatAnimationTimeout: number | null
}

const {} = store("vbuchara-portfolio/archive-projects", {
    actions: {
        onClickInfoButtonExpand: () => {
            const context = getContext<ArchiveProjectsProjectContext>();

            context.shouldExpandInfo = !context.shouldExpandInfo;
        },
        onClickSkillsButtonExpand: () => {
            const context = getContext<ArchiveProjectsProjectContext>();
        
            context.shouldExpandSkills =!context.shouldExpandSkills;
        },
        onAnimationEndProjectLink: (event: AnimationEvent) => {
            const context = getContext<ArchiveProjectsLinksContext>();
            if(!event.animationName.includes("element-highlight-animation")) return;

            window.clearTimeout(context.repeatAnimationTimeout || undefined);

            context.shouldAnimate = false;
            context.repeatAnimationTimeout = window.setTimeout(() => {
                context.shouldAnimate = true;
            }, 5 * 1000);
        }
    },
    callbacks: {
        shouldExpandInfoBeVisible: () => {
            const context = getContext<ArchiveProjectsProjectContext>();

            return context.isInfoOverflowing || context.shouldExpandInfo;
        },
        shouldExpandSkillsBeVisible: () => {
            const context = getContext<ArchiveProjectsProjectContext>();

            return context.isSkillsOverflowing || context.shouldExpandSkills;
        },
        onRunProjectItem: () => {
            const context = getContext<ArchiveProjectsProjectContext>();

            const descriptionSelector = ".portfolio-archive-projects__item-description";
            const skillsListSelector = ".portfolio-archive-projects__item-skills-list";
            const linksSelector = ".portfolio-archive-projects__item-links";

            const projectItemMeasure = useInteractivityMeasure();
            const descriptionMeasure = useInteractivityMeasure(descriptionSelector);
            const skillsListMeasure = useInteractivityMeasure(skillsListSelector);

            const linksIntersection = useInteractivityIntersection(linksSelector, {
                root: null,
                threshold: 0.2
            });

            useEffect(() => {
                const { ref: projectItem } = getElement();
                const description = projectItem?.querySelector<HTMLElement>(descriptionSelector);
                if(!description) return;

                context.isInfoOverflowing = description.scrollHeight > description.clientHeight;

            }, [descriptionMeasure?.width, descriptionMeasure?.height, context.shouldExpandInfo]);

            useEffect(() => {
                const { ref: projectItem } = getElement();
                const skillsList = projectItem?.querySelector<HTMLElement>(skillsListSelector);
                if(!skillsList) return;

                context.isSkillsOverflowing = skillsList.scrollHeight > skillsList.clientHeight;

            }, [skillsListMeasure?.width, skillsListMeasure?.height, context.shouldExpandSkills]);

            useEffect(() => {
                context.shouldExpandInfo = false;
                context.shouldExpandSkills = false;
            }, [projectItemMeasure?.width]);

            useEffect(() => {
                context.isProjectLinksIntersecting = linksIntersection ? linksIntersection.isIntersecting : false;
            }, [linksIntersection?.isIntersecting]);
        },
        onRunProjectLink: () => {
            const context = getContext<ArchiveProjectsLinksContext>();
            
            useEffect(() => {
                context.shouldAnimate = context.isProjectLinksIntersecting;
                window.clearTimeout(context.repeatAnimationTimeout || undefined);
            }, [context.isProjectLinksIntersecting]);
        }
    }
});