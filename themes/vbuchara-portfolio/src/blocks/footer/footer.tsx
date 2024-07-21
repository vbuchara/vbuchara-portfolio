import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { footer } from "@wordpress/icons";

import type { EditorMenuItemType } from "@components/editor-menu-item";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<FooterAttributesType>;

export interface FooterSocialLinks {
    linkedin: string,
    github: string,
    gmail: string
}

export type FooterAttributesType = {
    menuItems: EditorMenuItemType[],
    socialLinks: FooterSocialLinks,
    copyrightText: string,
};

registerBlockType<FooterAttributesType>(block.name, {
    ...block,
    attributes: {
        menuItems: {
            type: "array",
            default: []
        },
        socialLinks: {
            type: "object",
            default: {
                linkedin: "",
                github: "",
                gmail: ""
            } satisfies FooterSocialLinks
        },
        copyrightText: {
            type: "string",
            default: "Copyright © 2024 Vinicius Buchara All Rights Reserved"
        }
    },
    icon: footer,
    edit: EditComponent
});