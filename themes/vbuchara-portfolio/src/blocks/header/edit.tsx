import { useRef, useState } from "react";
import { useEffectOnce } from "react-use";
import { type BlockEditProps } from "@wordpress/blocks";
import { useDispatch, useSelect } from "@wordpress/data";
import { v4 as uuid } from "uuid";

import { ReactComponent as Logo } from "@assets/svgs/logo.svg";
import { ReactComponent as Menu } from "@assets/svgs/menu.svg";
import { ReactComponent as Close } from "@assets/svgs/close.svg";

import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";
import portfolioBlocksStore from "@stores/portfolio-blocks";

import { HeaderInspectorControls } from "./components/controls";

import type { HeaderAttributesType } from "./header";

export type HeaderEditComponentProps = BlockEditProps<HeaderAttributesType>;

export function EditComponent(props: HeaderEditComponentProps){
    const { attributes, setAttributes, clientId } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLHeadElement>(null);
    const menuItemsDependency = attributes.menuItems.reduce((result, { id }) => result + id, "");

    const { 
        getRegisteredBlock, 
        isRegisteredId 
    } = useSelect((select) => select(portfolioBlocksStore), [menuItemsDependency, clientId]);
    const { 
        registerBlock,
        removeRegisteredBlockById
    } = useDispatch(portfolioBlocksStore);

    function handleOnClickMenuToggle(){
        setIsMenuOpen((prev) => !prev);
    }
    
    useEffectOnce(() => {
        const registeredBlock = getRegisteredBlock(clientId);
        const blockRegisteredIds = registeredBlock?.registeredIds || new Set();

        const validatedMenuItems = attributes.menuItems.map((item) => {
            if(!isRegisteredId(item.id)){
                blockRegisteredIds.add(item.id);
                return item;
            }

            const newId = uuid();
            blockRegisteredIds.add(newId);

            return {
                ...item,
                id: newId,
            }
        });

        setAttributes({ menuItems: validatedMenuItems });

        registerBlock({
            ...registeredBlock,
            clientId: clientId,
            registeredIds: blockRegisteredIds
        });

        return () => {
            removeRegisteredBlockById(clientId);
        };
    });

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
                        className={`site-header__menu-item`}
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