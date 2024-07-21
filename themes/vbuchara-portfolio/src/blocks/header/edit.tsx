import { useRef, useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";

import { ReactComponent as Logo } from "@assets/svgs/logo.svg";
import { ReactComponent as Menu } from "@assets/svgs/menu.svg";
import { ReactComponent as Close } from "@assets/svgs/close.svg";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import { type EditorMenuItemType } from "@components/editor-menu-item";
import { useRegisterIds } from "@src/hooks/useRegisterIds";

import { HeaderInspectorControls } from "./components/controls";

import type { HeaderAttributesType } from "./header";

export type HeaderEditComponentProps = BlockEditProps<HeaderAttributesType>;

export function EditComponent(props: HeaderEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLHeadElement>(null);

    useRegisterIds({
        clientId: clientId,
        items: attributes.menuItems,
        setItems: (items) => setAttributes({ menuItems: items }),
    });

    function handleOnClickMenuToggle(){
        setIsMenuOpen((prev) => !prev);
    }

    return (
    <EditorWrapper>
        <HeaderInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
            clientId={clientId}
        />
        <header 
            ref={headerRef}
            className={`site-header ${isMenuOpen ? "site-header--menu-open" : ""}`}
        >
            <h1 className="site-header__logo">
                <EditorAnchor
                    className="site-header_logo-link"
                >
                    <Logo
                        className="site-header__logo-icon"
                    />
                </EditorAnchor>
            </h1>
            <button
                type="button"
                className="site-header__menu-toggle"
                onClick={handleOnClickMenuToggle}
            >
                {!isMenuOpen ? (
                <Menu className="site-header__menu-toggle-icon" />
                ) : (
                <Close className="site-header__menu-toggle-icon" />
                )}
            </button>
            <nav className="site-header__menu">
                <ul
                    className="site-header__menu-items"
                >
                    {attributes.menuItems.map((item) => (
                    <li 
                        key={item.id}
                        className="site-header__menu-item"
                    >
                        <EditorAnchor
                            className="site-header__menu-item-link" 
                            href={item.url}
                        >
                            {item.title}
                        </EditorAnchor>
                    </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="site-header__menu-contact-button"
                >
                    Contact Me
                </button>
            </nav>
        </header>
    </EditorWrapper>
    );
}