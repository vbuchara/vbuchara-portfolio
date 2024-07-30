import type { SelectControlOptions } from "@wordpress/components";

export const BreakpointsOptions = [
    {
        label: "Extra Extra Small (Less than 360px)",
        value: "xxs"
    },
    {
        label: "Extra Small (Between 360px and 576px)",
        value: "xs"
    },
    {
        label: "Small (Between 576px and 768px)",
        value: "sm"
    },
    {
        label: "Medium (Between 768px and 992px)",
        value: "md"
    },
    {
        label: "Large (Between 992px and 1200px)",
        value: "lg"
    },
    {
        label: "Extra Large (Between 1200px and 1400px)",
        value: "xl"
    },
    {
        label: "Extra Extra Large (Greater than 1400px)",
        value: "xxl"
    }
] as const satisfies SelectControlOptions[];

export type BreakpointsOption = (typeof BreakpointsOptions)[number];

export type BreakpointsValue = BreakpointsOption["value"];