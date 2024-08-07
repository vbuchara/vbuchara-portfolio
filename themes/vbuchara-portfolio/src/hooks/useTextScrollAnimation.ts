import { RefObject, useRef } from "react";
import { useSpring } from "@react-spring/web";

export function useTextScrollAnimation(
    ref: RefObject<HTMLElement> | HTMLElement | null
){
    const animationCancel = useRef(false);
    const scrollRef = ((ref instanceof HTMLElement || !ref) ? { current: ref } : ref);

    const [_, scrollAnimationController] = useSpring(() => ({
        scrollX: 0,
        onChange: (result) => {
            if(!scrollRef.current) return;

            const {
                scrollX
            } = result.value as { scrollX: number };

            scrollRef.current.scrollTo({
                left: scrollX,
            });
        },
        config: {
            duration: 3000
        }
    }), (ref instanceof HTMLElement || !ref) ? [ref] : undefined);

    function startScrollLeft(){
        if(!scrollRef.current) return;
        
        scrollAnimationController.set({ scrollX: 0 });
        animationCancel.current = false;

        scrollRef.current.style.setProperty("text-overflow", "unset");

        setTimeout(() => {
            if(!scrollRef.current || animationCancel.current) return;

            scrollAnimationController.start({
                scrollX: scrollRef.current.scrollWidth
            });
        }, 500);
    }

    function revertScroll(){
        if(!scrollRef.current) return;

        scrollAnimationController.stop(true);
        scrollRef.current.style.removeProperty("text-overflow");
        scrollRef.current.scrollTo({
            left: 0
        });
        animationCancel.current = true;
    }

    return {
        startScrollLeft,
        revertScroll,
        scrollAnimationController
    };
}