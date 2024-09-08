import { 
    useMemo,
    type Dispatch, 
    type SetStateAction 
} from "react";

export interface EditorPaginationProps {
    currentPageNumber: number;
    setCurrentPageNumber: Dispatch<SetStateAction<number>>;
    pageQuantity: number;
    endSize?: number;
    midSize?: number;
}

export interface PageNumberProps {
    pageNumber: number;
}

export function EditorPagination(props: EditorPaginationProps){
    const {
        endSize = 1,
        midSize = 2,
        currentPageNumber,
        setCurrentPageNumber,
        pageQuantity,
    } = props;

    const shouldRenderPreviousPage = currentPageNumber > 1;
    const shouldRenderNextPage = currentPageNumber < pageQuantity;
    const shouldRenderLeftDots = (currentPageNumber - midSize) > (0 + endSize);
    const shouldRenderRightDots = (currentPageNumber + midSize) < (pageQuantity - endSize);

    const totalPageNumbers = useMemo(() => {
        return Array.from({ length: pageQuantity }, (_, index) => index + 1);
    }, [pageQuantity]);

    const firstPageNumbers = useMemo(() => {
        return totalPageNumbers.filter((value) => value <= endSize || value === 1);
    }, [endSize, totalPageNumbers.length]);
    const pageNumbersToRender = useMemo(() => {
        return totalPageNumbers.filter((value) => {
            if(value === 1 || value === pageQuantity) return false;

            return (value >= currentPageNumber - midSize && value <= currentPageNumber + midSize);
        });
    }, [currentPageNumber, totalPageNumbers.length]);
    const lastPageNumbers = useMemo(() => {
        return totalPageNumbers.filter((value) => value > pageQuantity - endSize || value === pageQuantity);
    }, [endSize, totalPageNumbers.length]);

    function setPreviousPage(){
        setCurrentPageNumber((previousPageNumber) => {
            if(previousPageNumber <= 1) return 1;

            return previousPageNumber - 1;
        });
    }

    function setNextPage(){
        setCurrentPageNumber((previousPageNumber) => {
            if(previousPageNumber >= pageQuantity) return pageQuantity;
            
            return previousPageNumber + 1;
        });
    }

    const PreviousPageButton = () => (
    <button
        type="button"
        className="portfolio-pagination__controls"
        onClick={setPreviousPage}
    >
        {"<"}
    </button>
    );

    const NextPageButton = () => (
    <button
        type="button"
        className="portfolio-pagination__controls"
        onClick={setNextPage}
    >
        {">"}
    </button>
    );

    const PageNumbersDots = () => (
    <span className="portfolio-pagination__page-numbers portfolio-pagination__page-numbers--dots">
        …
    </span>
    );

    const PageNumber = ({ 
        pageNumber, 
    }: PageNumberProps) => {
        if(pageNumber === currentPageNumber) return (
        <span 
            aria-current="page" 
            className="portfolio-pagination__page-numbers portfolio-pagination__page-numbers--current"
        >{pageNumber}</span>
        );

        return (
        <button
            type="button"
            className="portfolio-pagination__page-numbers"
            onClick={() => setCurrentPageNumber(pageNumber)}
        >{pageNumber}</button>
        );
    };

    return (
    <div className="portfolio-pagination">
        {(shouldRenderPreviousPage) ? (<PreviousPageButton/>) : null}
        {firstPageNumbers.map((pageNumber) => (<PageNumber key={pageNumber} pageNumber={pageNumber} />))}
        {(shouldRenderLeftDots) ? (<PageNumbersDots/>) : null}
        {pageNumbersToRender.map((pageNumber) => (<PageNumber key={pageNumber} pageNumber={pageNumber} />))}
        {(shouldRenderRightDots) ? (<PageNumbersDots/>) : null}
        {lastPageNumbers.map((pageNumber) => (<PageNumber key={pageNumber} pageNumber={pageNumber} />))}
        {(shouldRenderNextPage) ? (<NextPageButton/>) : null}
    </div>
    );
}