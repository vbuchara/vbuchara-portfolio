import { Fragment } from "react/jsx-runtime";
import type { WP_Post } from "wordpress-types"

import { EditorAnchor } from "@components/editor-anchor";

import { getExcerpt } from "@utils/getExcerpt";
import { getTitle } from "@utils/getTitle";
import { getThumbnail } from "@utils/getThumbnail";

export interface PostItemProps {
    post: WP_Post,
    classPrefix?: string
}

export function PostItem(props: PostItemProps){
    const { post } = props;
    const classPrefix = props.classPrefix ? props.classPrefix : "portfolio-archive-posts";

    const postThumbnail = getThumbnail(post, { size: "post-image", defaultAltText: "Post Thumbnail" });
    const postTags = post._embedded?.["wp:term"][0];

    return (
    <div
        id={post.slug}
        className={`${classPrefix}__item`}
    >
        <EditorAnchor
            className={`${classPrefix}__item-image-link`}
            href={post.link}
        >
            <img
                className={`${classPrefix}__item-image`}
                src={postThumbnail.url}
                alt={postThumbnail.alt}
            />
        </EditorAnchor>
        <div className={`${classPrefix}__item-content`}>
            <EditorAnchor
                className={`${classPrefix}__item-title-link`}
                href={post.link}
            >
                <h2 className={`${classPrefix}__item-title`}>
                    {getTitle(post)}
                </h2>
            </EditorAnchor>
            <p className={`${classPrefix}__item-description`}>
                {getExcerpt(post, { trimWords: 20 })}
            </p>
            <p className={`${classPrefix}__item-tags`}>
                {"Tags: "} 
                <span className={`${classPrefix}__item-tags-links`}>
                    {postTags?.map((category, index) => (
                    <Fragment key={category.id}>
                        {index > 0 ? ", " : ""}
                        <EditorAnchor
                            className={`${classPrefix}__item-tags-link`}
                            href={category.link}
                        >
                            {category.name}
                        </EditorAnchor>
                    </Fragment>
                    ))}
                </span>
            </p>
        </div>
    </div>
    );
}