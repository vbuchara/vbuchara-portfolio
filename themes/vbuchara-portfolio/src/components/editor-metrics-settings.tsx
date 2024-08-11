import {
    PanelBody,
    PanelRow,
    TextControl
} from "@wordpress/components";

export interface MetricsStyles {
    minWidth?: string,
    width?: string,
    maxWidth?: string,
    minHeight?: string,
    height?: string,
    maxHeight?: string,
}

export interface EditorMetricsSettingsProps {
    metrics: MetricsStyles,
    setMetrics: (metrics: Partial<MetricsStyles>) => void,
    title?: string,
    initialOpen?: boolean,
}

export function EditorMetricsSettings(props: EditorMetricsSettingsProps) {
    const {
        metrics,
        setMetrics,
        title,
        initialOpen
    } = props;

    return (
    <PanelBody
        title={title}
        initialOpen={initialOpen}
    >
        <PanelRow>
            <TextControl
                label="Min Width"
                className="portfolio-editor__control"
                value={metrics.minWidth || ""}
                onChange={(value) => setMetrics({ minWidth: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Width"
                className="portfolio-editor__control"
                value={metrics.width || ""}
                onChange={(value) => setMetrics({ width: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Max Width"
                className="portfolio-editor__control"
                value={metrics.maxWidth || ""}
                onChange={(value) => setMetrics({ maxWidth: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Min Height"
                className="portfolio-editor__control"
                value={metrics.minHeight || ""}
                onChange={(value) => setMetrics({ minHeight: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Height"
                className="portfolio-editor__control"
                value={metrics.height || ""}
                onChange={(value) => setMetrics({ height: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Max Height"
                className="portfolio-editor__control"
                value={metrics.maxHeight || ""}
                onChange={(value) => setMetrics({ maxHeight: value })}
            />
        </PanelRow>
    </PanelBody>
    );
}

export function getMetricSettingsVariables(metrics: MetricsStyles){
    return{
        "--min-width": metrics.minWidth,
        "--width": metrics.width,
        "--max-width": metrics.maxWidth,
        "--min-height": metrics.minHeight,
        "--height": metrics.height,
        "--max-height": metrics.maxHeight,
    } satisfies React.CSSProperties;
}