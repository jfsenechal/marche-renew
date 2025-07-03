export default (siteSlug: String, articleId: Number) => {
    const {pending: pendingArticle, data: article, error: errorArticle} = useLazyFetch(
        `https://www.marche.be/nuxt/post.php?site=${siteSlug}&id=${articleId}`
    );
    return {
        pendingArticle,
        article,
        errorArticle
    };
}