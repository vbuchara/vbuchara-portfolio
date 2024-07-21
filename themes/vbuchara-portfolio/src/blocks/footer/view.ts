import { getContext, store, getElement, withScope,  } from "@wordpress/interactivity";

import type { FooterSocialLinks } from "./footer";

export interface FooterContext {
    socialLinks: FooterSocialLinks;
    gmailHasBeingCopied: boolean;
    gmailHasBeingCopiedTimeout: number | null;
}

export interface FooterSocialLinkContext extends FooterContext {
    shouldAnimate: boolean;
    repeatAnimationTimeout: number | null;
}

const { state, callbacks } = store("vbuchara-portfolio/footer", {
    state: {
        intersectionObservers: new Map<string, IntersectionObserver>(),
    },
    actions: {
        copyToClipboard: function*(event: Event){
            const context = getContext<FooterContext>();
            const target = event.target;
            const popoverClass = "site-footer__social-contact-item-link-popover";

            if(target instanceof HTMLElement && target.classList.contains(popoverClass)) return;
            if(!navigator.clipboard) return;

            yield navigator.clipboard.writeText(context.socialLinks.gmail || "");

            context.gmailHasBeingCopied = true;

            window.clearTimeout(context.gmailHasBeingCopiedTimeout || undefined);

            context.gmailHasBeingCopiedTimeout = window.setTimeout(() => {
                context.gmailHasBeingCopied = false;
            }, 3000);
        },
        doLinkAnimation: () => {
            const context = getContext<FooterSocialLinkContext>();
            const linkElement = getElement();

            if(!linkElement.ref) return;

            window.clearTimeout(context.repeatAnimationTimeout || undefined);
            context.shouldAnimate = true;
        },
        onLinkAnimationEnd: (event: AnimationEvent) => {
            if(!event.animationName.includes("element-highlight-animation")) return;

            const context = getContext<FooterSocialLinkContext>();

            context.shouldAnimate = false;

            window.clearTimeout(context.repeatAnimationTimeout || undefined);
            context.repeatAnimationTimeout = window.setTimeout(() => {
                context.shouldAnimate = true;
            }, 2000);
        },
        onLinkAnimationClear: () => {
            const context = getContext<FooterSocialLinkContext>();

            context.shouldAnimate = false;
            window.clearTimeout(context.repeatAnimationTimeout || undefined);
        }
    },
    callbacks: {
        onFooterInit: () => {
            const footer = getElement();

            if(!footer.ref) return;

            const observerCallback: IntersectionObserverCallback = (entries) => {
                entries.forEach((entry) => {
                    const socialLinksList = entry.target as HTMLElement;
                    const socialLinks = socialLinksList.querySelectorAll(".site-footer__social-contact-item-link");
                    
                    if(entry.isIntersecting) {
                        socialLinks.forEach((socialLink) => {
                            socialLink.dispatchEvent(new Event("animate"));
                        });
                    } else {
                        socialLinks.forEach((socialLink) => {
                            socialLink.dispatchEvent(new Event("animation-clear"));
                        });
                    }
                })
            };

            const intersectionObserver = new IntersectionObserver(withScope(observerCallback), {
                root: null,
                threshold: 0.2
            });

            const elementsToAnimate = footer.ref
                .querySelectorAll<HTMLElement>(".site-footer__social-contact-items");

            elementsToAnimate.forEach((element) => intersectionObserver.observe(element));

            state.intersectionObservers = new Map([
                ...state.intersectionObservers,
                ["vbuchara-portfolio/footer", intersectionObserver]
            ]);
        },
    }
});