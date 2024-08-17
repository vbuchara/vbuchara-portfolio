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
import clsx from "clsx";
import { EditorAnimatedElement } from "@src/components/editor-animated-element";

export type FooterEditComponentProps = BlockEditProps<FooterAttributesType>;

export function EditComponent(props: FooterEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const socialLinkItemsRef = useRef<HTMLUListElement>(null);

    const gmailHasBeingCopiedTimeout = useRef<number>();

    const [gmailHasBeingCopied, setGmailHasBeingCopied] = useState(false);

    const socialLinksIntersectionEntry = useIntersection(
        socialLinkItemsRef,
        { root: null, threshold: 0.2 }
    );
    
    const linkedinClasses = useMemo(() => {
        return clsx({
            "site-footer__social-contact-item-link": true
        });
    }, []);

    const githubClasses = useMemo(() => {
        return clsx({
            "site-footer__social-contact-item-link": true
        });
    }, []);

    const gmailLinkClasses = useMemo(() => {
        return clsx({
            "site-footer__social-contact-item-link": true,
            "site-footer__social-contact-item-link--copied": gmailHasBeingCopied,
        });
    }, [gmailHasBeingCopied]);

    async function handleOnClickGmailLink(){
        if(!navigator.clipboard) return;

        await navigator.clipboard.writeText(attributes.socialLinks.gmail || "");
        setGmailHasBeingCopied(() => true);
        
        window.clearTimeout(gmailHasBeingCopiedTimeout.current);
        
        gmailHasBeingCopiedTimeout.current = window.setTimeout(() => {
            setGmailHasBeingCopied(() => false);
        }, 2000);
    }

    useRegisterIds({
        clientId: clientId,
        items: attributes.menuItems,
        setItems: (items) => setAttributes({ menuItems: items })
    });
    
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
                        <EditorAnimatedElement
                            tagName="a"
                            className={linkedinClasses}
                            animateClass="site-footer__social-contact-item-link--animate"
                            animationName="element-highlight-animation"
                            intersectionEntry={socialLinksIntersectionEntry}

                            href={attributes.socialLinks.linkedin}
                            title={`Linkedin: ${attributes.socialLinks.linkedin}`}
                            target="_blank"
                            rel="noopener"
                        >
                            <Linkedin
                                className="site-footer__social-contact-item-icon"
                                width="61" 
                                height="60" 
                            />
                        </EditorAnimatedElement>
                    </li>
                    <li className="site-footer__social-contact-item">
                        <EditorAnimatedElement
                            tagName="a"
                            className={githubClasses}
                            animateClass="site-footer__social-contact-item-link--animate"
                            animationName="element-highlight-animation"
                            intersectionEntry={socialLinksIntersectionEntry}

                            href={attributes.socialLinks.github}
                            title={`Github: ${attributes.socialLinks.github}`}
                            target="_blank"
                            rel="noopener"
                        >
                            <Github
                                className="site-footer__social-contact-item-icon"
                                width="61" 
                                height="60" 
                            />
                        </EditorAnimatedElement>
                    </li>
                    <li className="site-footer__social-contact-item">
                        <EditorAnimatedElement
                            tagName="button"
                            animateClass="site-footer__social-contact-item-link--animate"
                            animationName="element-highlight-animation"
                            intersectionEntry={socialLinksIntersectionEntry}

                            type="button"
                            title={`Gmail: ${attributes.socialLinks.gmail}`}
                            className={gmailLinkClasses}
                            onClick={handleOnClickGmailLink}
                        >
                            <div className="site-footer__social-contact-item-link-popover">
                                Copied to clipboard!
                            </div>
                            <Gmail
                                className="site-footer__social-contact-item-icon"
                                width="71" 
                                height="60"
                            />
                        </EditorAnimatedElement>
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