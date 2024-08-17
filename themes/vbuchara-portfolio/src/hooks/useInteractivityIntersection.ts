import { 
    getElement,
    useEffect,
    useMemo,
    useState 
} from "@wordpress/interactivity";

export function useInteractivityIntersection(selector?: string, options?: IntersectionObserverInit){
    const [intersection, setIntersection] = useState<IntersectionObserverEntry | null>(null);

    const intersectionObserver = useMemo(() => {
        return new IntersectionObserver((entries) => {
            const entry = entries[0];

            setIntersection(entry || null);
        }, options);
    }, [options?.root, options?.rootMargin, options?.threshold]);

    useEffect(() => {
        const { ref: element } = getElement();
        if(!element) return;

        const selectedElement = !selector ? element : element.querySelector(selector);

        if(selectedElement) {
            intersectionObserver.disconnect();
            intersectionObserver.observe(selectedElement);
        };

        return () => {
            intersectionObserver.disconnect();
        }
    }, [options?.root, options?.rootMargin, options?.threshold, selector]);

    return intersection;
}