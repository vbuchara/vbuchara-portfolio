import { type BlockEditProps } from "@wordpress/blocks";

import { ReactComponent as Logo } from "@assets/svgs/logo.svg";
import { EditorAnchor } from "@components/editor-anchor";
import { EditorWrapper } from "@components/editor-wrapper";

import type { HeaderAttributesType } from "./header";

export type HeaderEditComponentProps = BlockEditProps<HeaderAttributesType>;

export function EditComponent(props: HeaderEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <EditorWrapper>
        <header className="site-header">
            <h1 className="site-header__logo">
                <EditorAnchor>
                    <Logo/>
                </EditorAnchor>
            </h1>
            <nav>
                
            </nav>
            <button
                type="button"
                className="site-header__contact-button"
            >
                Contact Me
            </button>
        </header>
    </EditorWrapper>
    );
}