import { pipe } from "fp-ts/lib/function";

import { truncateWords } from "./truncateWords";

import type { WP_Post } from "wordpress-types";
import { stripHtml } from "string-strip-html";

export type PostExcerptInfo = Pick<
    WP_Post,
    "content" | "excerpt"
>;

export type GetExcerptOptions = {
    stripTags?: boolean,
    trimWords?: number
};

export function getExcerpt(
    post: PostExcerptInfo,
    options: GetExcerptOptions = {}
) {
    const allOptions = {
        stripTags: true,
        trimWords: 30,
       ...options
    } satisfies Required<GetExcerptOptions>;
    const {
        stripTags,
        trimWords
    } = allOptions;
    
    const excerpt = (post.excerpt && post.excerpt.rendered)
        ? post.excerpt.rendered
        : post.content.rendered;
    const stripHtmlTags = (value: string) => {
        return stripHtml(value).result;
    };
    const truncate = (text: string) => {
        return truncateWords(text, trimWords, "...");
    };

    return pipe(
        excerpt,
        stripTags ? stripHtmlTags : (text) => text,
        truncate
    );
}