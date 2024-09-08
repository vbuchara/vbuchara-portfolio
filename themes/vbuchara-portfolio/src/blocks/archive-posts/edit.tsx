import { useState } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { store as coreStore, useEntityRecords, type GetRecordsHttpQuery } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { WP_Post } from "wordpress-types";

import { EditorWrapper } from "@components/editor-wrapper";
import { EditorPagination } from "@components/editor-pagination";

import { PostItem } from "./components/post-item";

export type ArchivePostsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: ArchivePostsEditComponentProps){
    const { attributes, setAttributes } = props;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const { posts_per_page } = useSelect((select) => {
        return select(coreStore).getSite()
    }, []);

    const posts = useEntityRecords<WP_Post>("postType", "post", {
        context: "view",
        per_page: posts_per_page,
        page: currentPageNumber,
        orderby_date: "desc",
        orderby_title: "asc",
        _embed: true
    } satisfies GetRecordsHttpQuery);
    
    return (
    <EditorWrapper>
        <div className="portfolio-archive-posts">
            {(!posts.totalPages || posts.totalPages === 1) ? null : (
            <EditorPagination
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                pageQuantity={posts.totalPages}
            />
            )}
            {posts.records?.map((post) => (
            <PostItem
                key={post.id}
                post={post}
            />
            ))}
            {(!posts.totalPages || posts.totalPages === 1) ? null : (
            <EditorPagination
                currentPageNumber={currentPageNumber}
                setCurrentPageNumber={setCurrentPageNumber}
                pageQuantity={posts.totalPages}
            />
            )}
        </div>
    </EditorWrapper>
    );
}