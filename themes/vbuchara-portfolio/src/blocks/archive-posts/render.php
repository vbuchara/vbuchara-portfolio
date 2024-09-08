<?php 
    /**
     * @var WP_Post[] $posts
     */
    global $posts;

    use VBucharaPortfolio\Helpers\DebugHelpers;
    use VBucharaPortfolio\Helpers\PostHelpers;

    /**
     * @var array{} $attributes
     * @var string $content
     * @var WP_Block $block
     */

    $defaultPostImage = get_theme_file_uri("/assets/images/post-default-image.png");
?>
<div class="portfolio-archive-posts">
    <?= PostHelpers::get_pagination_html() ?>
    <?php foreach($posts as $post): ?>
        <?php 
           $postThumbnail = PostHelpers::get_post_thumbnail($post);
           
           $postTitle = wp_strip_all_tags(get_the_title($post));
           $postContent = wp_strip_all_tags(get_the_content(null, false, $post));
           $postExcerpt = get_the_excerpt($post) ? get_the_excerpt($post) : wp_trim_words($postContent, 20);
           $postTags = get_the_category($post->ID);
        ?>
        <div
            id="<?= $post->post_name ?>"
            class="portfolio-archive-posts__item"
        >
            <a 
                class="portfolio-archive-posts__item-image-link"
                href="<?= get_permalink($post) ?>"
            >
                <img
                    class="portfolio-archive-posts__item-image"
                    src="<?= $postThumbnail['url'] ?>"
                    alt="<?= $postThumbnail['alt'] ?>"
                />
            </a>
            <div class="portfolio-archive-posts__item-content">
                <a
                    class="portfolio-archive-posts__item-title-link"
                    href="<?= get_permalink($post) ?>"
                >
                    <h2 class="portfolio-archive-posts__item-title">
                        <?= $postTitle ?>
                    </h2>
                </a>
                <p class="portfolio-archive-posts__item-description">
                    <?= $postExcerpt ?>
                </p>
                <p class="portfolio-archive-posts__item-tags">
                    Tags:
                    <span class="portfolio-archive-posts__item-tags-links"
                    ><?php foreach($postTags as $index => $category): ?><?= 
                        $index > 0 ? ", " : "" 
                    ?><a 
                        class="portfolio-archive-posts__item-tags-link" 
                        href="<?= get_category_link($category) ?>"
                    ><?= $category->name ?></a
                    ><?php endforeach; ?>
                    </span>
                </p>
            </div>
        </div>
    <?php endforeach; ?>
    <?= PostHelpers::get_pagination_html() ?>
</div>