import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersection, useUnmount } from "react-use";
import { type BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import LogoFullSrc from "@assets/svgs/logo-full.svg";
import { ReactComponent as Linkedin } from "@assets/svgs/linkedin.svg";
import { ReactComponent as Github } from "@assets/svgs/github.svg";
import { ReactComponent as Gmail } from "@assets/svgs/gmail.svg";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";

import { useRegisterIds } from "@hooks/useRegisterIds";

import { FooterInspectorControls } from "./components/controls";

import type { FooterAttributesType } from "./footer";

export type FooterEditComponentProps = BlockEditProps<FooterAttributesType>;

export function EditComponent(props: FooterEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const socialLinkItemsRef = useRef<HTMLUListElement>(null);

    const socialLinksAnimationTimeout = useRef<number>();
    const gmailHasBeingCopiedTimeout = useRef<number>();

    const [shouldSocialLinksAnimate, setShouldSocialLinksAnimate] = useState(false);
    const [gmailHasBeingCopied, setGmailHasBeingCopied] = useState(false);

    const SocialLinksIntersectionEntry = useIntersection(
        socialLinkItemsRef,
        { root: null, threshold: 0.2 }
    );

    const socialLinkClasses = useMemo(() => {
        return `site-footer__social-contact-item-link ${
            shouldSocialLinksAnimate ? "site-footer__social-contact-item-link--animate" : ""
        }`;
    }, [shouldSocialLinksAnimate]);
    const linkedinClasses = useMemo(() => {
        return `${socialLinkClasses}`;
    }, [socialLinkClasses]);

    const githubClasses = useMemo(() => {
        return `${socialLinkClasses}`;
    }, [socialLinkClasses]);

    const gmailLinkClasses = useMemo(() => {
        return `${socialLinkClasses} ${
            gmailHasBeingCopied? "site-footer__social-contact-item-link--copied" : ""
        }`;
    }, [gmailHasBeingCopied, socialLinkClasses]);

    async function handleOnClickGmailLink(){
        if(!navigator.clipboard) return;

        await navigator.clipboard.writeText(attributes.socialLinks.gmail || "");
        setGmailHasBeingCopied(() => true);
        
        window.clearTimeout(gmailHasBeingCopiedTimeout.current);
        
        gmailHasBeingCopiedTimeout.current = window.setTimeout(() => {
            setGmailHasBeingCopied(() => false);
        }, 2000);
    }

    function handleOnAnimationEndSocialLinks(event: React.AnimationEvent){
        if(!event.animationName.includes("element-highlight-animation")) return;

        window.clearTimeout(socialLinksAnimationTimeout.current);
        setShouldSocialLinksAnimate(false);
        socialLinksAnimationTimeout.current = window.setTimeout(() => {
            setShouldSocialLinksAnimate(true);
        }, 2000);
    }

    useRegisterIds({
        clientId: clientId,
        items: attributes.menuItems,
        setItems: (items) => setAttributes({ menuItems: items })
    });

    useEffect(() => {
        const isSocialLinksIntersecting = SocialLinksIntersectionEntry 
            ? SocialLinksIntersectionEntry.isIntersecting
            : false;
        
        window.clearTimeout(socialLinksAnimationTimeout.current);
        
        setShouldSocialLinksAnimate(isSocialLinksIntersecting);

        return () => {
            window.clearTimeout(socialLinksAnimationTimeout.current);
        };
    }, [SocialLinksIntersectionEntry?.isIntersecting]);
    
    useUnmount(() => {
        window.clearTimeout(gmailHasBeingCopiedTimeout.current);
    });

    return (
    <EditorWrapper>
        <FooterInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            clientId={clientId}
        />
        <footer className="site-footer">
            <EditorAnchor
                className="site-footer__logo"
            >
                <img
                    className="site-footer__logo-image"
                    src={LogoFullSrc}
                    alt={"Logo of Vinicius Buchara Web Developer"}
                />
            </EditorAnchor>
            <nav className="site-footer__menu">
                <ul className="site-footer__menu-items">
                    {attributes.menuItems.map((item) => (
                    <li 
                        key={item.id}
                        className="site-footer__menu-item"
                    >
                        <EditorAnchor
                            className="site-footer__menu-item-link" 
                            href={item.url}
                        >
                            {item.title}
                        </EditorAnchor>
                    </li>
                    ))}
                </ul>
            </nav>
            <div className="site-footer__social-contact">
                <h1 className="site-footer__social-contact-title">
                    Contact Me Through
                </h1>
                <ul 
                    ref={socialLinkItemsRef}
                    className="site-footer__social-contact-items"
                >
                    <li className="site-footer__social-contact-item">
                        <EditorAnchor
                            className={linkedinClasses}
                            href={attributes.socialLinks.linkedin}
                            title={`Linkedin: ${attributes.socialLinks.linkedin}`}
                            target="_blank"
                            rel="noopener"
                            onAnimationEnd={handleOnAnimationEndSocialLinks}
                        >
                            <Linkedin
                                className="site-footer__social-contact-item-icon"
                            />
                        </EditorAnchor>
                    </li>
                    <li className="site-footer__social-contact-item">
                        <EditorAnchor
                            className={githubClasses}
                            href={attributes.socialLinks.github}
                            title={`Github: ${attributes.socialLinks.github}`}
                            target="_blank"
                            rel="noopener"
                            onAnimationEnd={handleOnAnimationEndSocialLinks}
                        >
                            <Github
                                className="site-footer__social-contact-item-icon"
                            />
                        </EditorAnchor>
                    </li>
                    <li className="site-footer__social-contact-item">
                        <button
                            type="button"
                            title={`Gmail: ${attributes.socialLinks.gmail}`}
                            className={gmailLinkClasses}
                            onClick={handleOnClickGmailLink}
                            onAnimationEnd={handleOnAnimationEndSocialLinks}
                        >
                            <div className="site-footer__social-contact-item-link-popover">
                                Copied to clipboard!
                            </div>
                            <Gmail
                                className="site-footer__social-contact-item-icon"
                            />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="site-footer__copyright">
                <RichText
                    tagName="p"
                    allowedFormats={["core/italic", "core/bold"]}
                    value={attributes.copyrightText}
                    onChange={(value) => setAttributes({ copyrightText: value })}
                />
            </div>
        </footer>
    </EditorWrapper>
    );
}