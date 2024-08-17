import { stripHtml } from 'string-strip-html';
import { pipe } from "fp-ts/lib/function";

import type { WP_Post } from "wordpress-types";

export type GetContentOptions = {
    stripTags?: boolean,
};

export function getContent(
    post: WP_Post,
    options: GetContentOptions = {}
) {
    const allOptions = {
        stripTags: true,
       ...options
    } satisfies Required<GetContentOptions>;
    const {
        stripTags,
    } = allOptions;
    const stripHtmlTags = (value: string) => {
        return stripHtml(value).result;
    };

    return pipe(
        post.content.rendered,
        stripTags ? stripHtmlTags : (value) => value,
    );
}