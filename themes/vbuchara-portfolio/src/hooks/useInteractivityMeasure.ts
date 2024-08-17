import { 
    getElement,
    useEffect,
    useMemo,
    useState 
} from "@wordpress/interactivity";

import { getMeasureFromResizeEntry } from "@utils/getMeasureFromResizeEntry";
import type { UseMeasureRect } from "react-use/lib/useMeasure";

export function useInteractivityMeasure(selector?: string){
    const [measure, setMeasure] = useState<UseMeasureRect>();

    const measureResizeObserver = useMemo(() => {
        return new ResizeObserver((entries) => {
            if(!entries[0]) return;
            const entry = entries[0];

            setMeasure(getMeasureFromResizeEntry(entry));
        });
    }, []);

    useEffect(() => {
        const { ref: element } = getElement();
        if(!element) return;

        const selectedElement = !selector ? element : element.querySelector(selector);

        if(selectedElement) measureResizeObserver.observe(selectedElement);

        return () => {
            measureResizeObserver.disconnect();
        };
    }, [selector]);

    return measure;
}