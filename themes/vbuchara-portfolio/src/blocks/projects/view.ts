import {
    store,
    getContext,
    getElement,
    withScope,
    useEffect,
    useMemo,
    useCallback,
} from "@wordpress/interactivity";
import debounce from "lodash/debounce";
import anime from "animejs";
import type { UseMeasureRect } from "react-use/lib/useMeasure";

import { getMeasureFromResizeEntry } from "@utils/getMeasureFromResizeEntry";
import { hasElementTotallyScrolled } from "@utils/hasElementTotallyScrolled";

export interface ProjectsContext {
    mainDivMeasure: UseMeasureRect | null;
    cardsDivElement: HTMLElement | null;
    cardsDivMeasure: UseMeasureRect | null;
    cardsDivScrollLeft: number | null;
    activeScrollLeft: boolean;
    activeScrollRight: boolean;
    handleOnScroll: ((event: Event) => void) | null;
}

export interface ProjectCardContext extends ProjectsContext{
    scrollAnimationController: anime.AnimeInstance | null;
    scrollStartTimeout: number | null;
    cardTitleLinkTextOverflow: string | false;
};

const { callbacks } = store("vbuchara-portfolio/projects", {
    actions: {
        startScrollLeftCardTitle: () => {
            const context = getContext<ProjectCardContext>();
            if(!context.scrollAnimationController) return;

            context.cardTitleLinkTextOverflow = "unset";

            function starScrollLeft(){
                const context = getContext<ProjectCardContext>();
                const cardTitleLinkElement = callbacks.getCardTitleLink();

                if(!cardTitleLinkElement) return;
                if(!context.scrollAnimationController) return;

                context.scrollAnimationController.restart();
            }

            context.scrollStartTimeout = window.setTimeout(withScope(starScrollLeft), 500);
        },
        revertScrollCardTitle: () => {
            const context = getContext<ProjectCardContext>();
            const cardTitleLinkElement = callbacks.getCardTitleLink();

            if(!cardTitleLinkElement) return;
            if(!context.scrollAnimationController) return;

            context.scrollAnimationController.pause();

            context.cardTitleLinkTextOverflow = false;
            cardTitleLinkElement.scrollTo({ left: 0 });
            window.clearTimeout(context.scrollStartTimeout || undefined);
        },
        handleScrollLeft: () => {
            const context = getContext<ProjectsContext>();
            if(!context.activeScrollLeft) return;
            if(!context.cardsDivElement || context.cardsDivElement.scrollLeft <= 0) return;

            const cardsBoundingRect = context.cardsDivElement.getBoundingClientRect();

            const cardsElements = context.cardsDivElement.querySelectorAll<HTMLElement>(".portfolio-projects__card");
            const firstCardOutOfView = Array.from(cardsElements).toReversed().find((card) => {
                const cardBoundingRect = card.getBoundingClientRect();
                
                return Math.floor(cardBoundingRect.left + 1) < Math.floor(cardsBoundingRect.left);
            });
            const firstChildElement = context.cardsDivElement.firstElementChild;

            if(firstCardOutOfView && firstCardOutOfView !== firstChildElement){
                firstCardOutOfView.scrollIntoView({
                    behavior: "smooth",
                    inline: "start",
                    block: "nearest"
                });
                return;
            }

            context.cardsDivElement.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        },
        handleScrollRight: () => {
            const context = getContext<ProjectsContext>();
            if(!context.activeScrollRight) return;
            if(!context.cardsDivElement || hasElementTotallyScrolled(context.cardsDivElement, "horizontal")) return;

            const cardsBoundingRect = context.cardsDivElement.getBoundingClientRect();

            const cardsElements = context.cardsDivElement.querySelectorAll<HTMLElement>(".portfolio-projects__card");
            const firstCardOutOfView = Array.from(cardsElements).find((card) => {
                const cardBoundingRect = card.getBoundingClientRect();
                
                return Math.floor(cardBoundingRect.right - 1) > Math.floor(cardsBoundingRect.right);
            });
            const lastChildElement = context.cardsDivElement.lastElementChild;

            if(firstCardOutOfView && firstCardOutOfView !== lastChildElement){
                firstCardOutOfView.scrollIntoView({
                    behavior: "smooth",
                    inline: "end",
                    block: "nearest"
                });
                return;
            }

            context.cardsDivElement.scrollTo({
                left: context.cardsDivElement.scrollWidth,
                behavior: "smooth",
            });
        }
    },
    callbacks: {
        onInitCardTitle: () => {
            const context = getContext<ProjectCardContext>();

            const cardTitleLinkElement = callbacks.getCardTitleLink();
            if(!cardTitleLinkElement) return;

            const scrollObject = {
                scrollX: 0
            };
            
            context.scrollAnimationController = anime({
                targets: scrollObject,
                scrollX: cardTitleLinkElement.scrollWidth,
                change: () => {
                    if(!cardTitleLinkElement) return;
 
                    cardTitleLinkElement.scrollTo({
                        left: scrollObject.scrollX,
                    });
                },
                autoplay: false,
                direction: "normal",
                loop: false,
                easing: "linear",
                duration: 2500
            });
        },
        onRunMainDiv: () => {
            const context = getContext<ProjectsContext>();

            const resizeObserver = useMemo(() => {
                return new ResizeObserver((entries) => {
                    if(!entries[0]) return;
                    const entry = entries[0];
    
                    context.mainDivMeasure = getMeasureFromResizeEntry(entry);
                });
            }, []);

            useEffect(() => {
                const { ref: mainDivElement } = getElement();
                if(!mainDivElement) return;

                resizeObserver.observe(mainDivElement);

                return () => {
                    resizeObserver.disconnect();
                };
            }, []);
        },
        onRunCardsDiv: () => {
            const context = getContext<ProjectsContext>();

            const resizeObserver = useMemo(() => {
                return new ResizeObserver((entries) => {
                    if(!entries[0]) return;
                    const entry = entries[0];
    
                    context.cardsDivMeasure = getMeasureFromResizeEntry(entry);
                });
            }, []);

            context.handleOnScroll = useCallback(
                debounce(handleOnScrollCardsDiv, 10, { leading: true }),
                []
            );

            function handleOnScrollCardsDiv(event: Event){
                const cardsDivElement = event.target as HTMLElement;
                if(!cardsDivElement) return;

                context.cardsDivScrollLeft = cardsDivElement.scrollLeft;
            }

            useEffect(() => {
                const { ref: cardsDivElement } = getElement();
                if(!cardsDivElement) return;

                resizeObserver.observe(cardsDivElement);
                context.cardsDivElement = cardsDivElement;

                return () => {
                    resizeObserver.disconnect();
                };
            }, [resizeObserver]);

            useEffect(() => {
                const { ref: cardsDivElement } = getElement();
                if(!cardsDivElement) return;

                const isOverflowing = cardsDivElement.scrollWidth > cardsDivElement.clientWidth;

                context.activeScrollLeft = isOverflowing && cardsDivElement.scrollLeft > 0;
                context.activeScrollRight = isOverflowing && !hasElementTotallyScrolled(cardsDivElement, "horizontal");
            }, [
                context.cardsDivMeasure?.width, 
                context.mainDivMeasure?.width,
                context.cardsDivScrollLeft
            ]);
        },
        getCardTitleLink: () => {
            const { ref: cardTitleElement } = getElement();
            if(!cardTitleElement) return null;

            return cardTitleElement.querySelector<HTMLElement>(
                ".portfolio-projects__card-title-link"
            );
        },
        shouldActiveScroll: () => {
            const context = getContext<ProjectsContext>();

            return context.activeScrollLeft || context.activeScrollRight;
        }
    }
});

