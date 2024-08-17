import { 
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ComponentPropsWithoutRef, 
    type ButtonHTMLAttributes,
    type RefObject,
    type Dispatch,
    type SetStateAction, 
} from "react";
import { useIntersection, useUnmount } from "react-use";
import clsx from "clsx";

import { EditorAnchor } from "./editor-anchor";

export type EditorAnimatedElementProps = 
    | EditorAnimatedAnchorProps
    | EditorAnimatedButtonProps;

function EditorAnimatedElementComponent(
    { 
        animateClass, 
        animationName,
        className,
        children, 
        intersectionEntry,
        timeoutTime,
        shouldAnimateState,
        ...props 
    }: EditorAnimatedElementProps,
    ref: RefObject<HTMLElement>,
){
    const animationTimeout = useRef<number>();
    
    const [shouldAnimate, setShouldAnimate] = shouldAnimateState ? shouldAnimateState : useState(false);

    const refItemIntersectionEntry = typeof intersectionEntry !== 'undefined' 
        ? intersectionEntry 
        : useIntersection(ref, { root: null, threshold: 0.2 });

    const anchorClasses = useMemo(() => {
        return clsx({
            ...(className ? { [className]: true } : {}),
            [animateClass]: shouldAnimate
        });
    }, [className, shouldAnimate]);

    function handleOnAnimationEnd(event: React.AnimationEvent<HTMLElement>){
        if(!event.animationName.includes(animationName)) return;

        window.clearTimeout(animationTimeout.current);
        setShouldAnimate(false);
        animationTimeout.current = window.setTimeout(() => {
            setShouldAnimate(true);
        }, timeoutTime ? timeoutTime : 2000);
    }

    useEffect(() => {
        const isIntersecting = refItemIntersectionEntry 
            ? refItemIntersectionEntry.isIntersecting
            : false;
        
        window.clearTimeout(animationTimeout.current);
        
        setShouldAnimate(isIntersecting);

        return () => {
            window.clearTimeout(animationTimeout.current);
        };
    }, [refItemIntersectionEntry?.isIntersecting]);
    
    useUnmount(() => {
        window.clearTimeout(animationTimeout.current);
    });

    if(props.tagName === "a"){
        const { tagName: _, ...anchorProps } = props;

        return (
        <EditorAnchor
            className={anchorClasses}
            onAnimationEnd={handleOnAnimationEnd}
            {...anchorProps}
            ref={ref as RefObject<HTMLAnchorElement>}
        >
            {children}
        </EditorAnchor>
        );
    }

    if(props.tagName === "button"){
        const { tagName: _, ...buttonProps } = props;

        return (
        <button
            className={anchorClasses}
            onAnimationEnd={handleOnAnimationEnd}
            {...buttonProps}
            ref={ref as RefObject<HTMLButtonElement>}
        >
            {children}
        </button>
        );
    }

    throw new Error("Invalid tag name!");
}

export const EditorAnimatedElement = forwardRef(EditorAnimatedElementComponent);

export type TagNameAvailable = "a" | "button";

export interface EditorAnimatedCommonProps{
    tagName: TagNameAvailable;
    animateClass: string;
    animationName: string;
    timeoutTime?: number;
    intersectionEntry?: IntersectionObserverEntry | null;
    shouldAnimateState?: [boolean, Dispatch<SetStateAction<boolean>>];
}

export interface EditorAnimatedAnchorProps 
    extends EditorAnimatedCommonProps, ComponentPropsWithoutRef<typeof EditorAnchor> {
        tagName: "a";
    }

export interface EditorAnimatedButtonProps 
    extends EditorAnimatedCommonProps, ButtonHTMLAttributes<HTMLButtonElement> {
        tagName: "button";
    }
