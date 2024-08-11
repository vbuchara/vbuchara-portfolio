import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Container } from "@assets/svgs/container.svg";

import type { MetricsStyles } from "@components/editor-metrics-settings";
import type { PositionStyles } from "@components/editor-position-settings";
import type { PaddingStyles } from "@components/editor-padding-settings";
import { GridStyles, defaultGridSettingsVariables } from "@components/editor-grid-settings";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

const { default: block } = await import("./block.json") as BlockJsonDefault<ContainerAttributesType>;

export type BlobBackgroundType = "welcome" | "about" | "none";

export interface ContainerStyles {
    metrics: MetricsStyles,
    position: PositionStyles,
    grid: GridStyles,
    padding: PaddingStyles
}

export type ContainerAttributesType = {
    blobBackgroundType: BlobBackgroundType,
    styles: ContainerStyles
};

registerBlockType<ContainerAttributesType>(block.name, {
    ...block,
    attributes: {
        blobBackgroundType: {
            type: "string",
            default: "none" satisfies BlobBackgroundType
        },
        styles: {
            type: "object",
            default: {
                metrics: {},
                position: {},
                grid: defaultGridSettingsVariables,
                padding: {}
            } satisfies ContainerStyles
        }
    },
    icon: () => <Container color="inherit" />,
    edit: EditComponent,
    save: SaveComponent
});