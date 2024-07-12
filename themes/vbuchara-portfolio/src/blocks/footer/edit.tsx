
import { type BlockEditProps } from "@wordpress/blocks";

import type { FooterAttributesType } from "./footer";

export type FooterEditComponentProps = BlockEditProps<FooterAttributesType>;

export function EditComponent(props: FooterEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <div>
        Footer Edit Component
    </div>
    );
}