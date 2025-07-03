export default (siteSlug: String, categorySelected: String) => {
    const {pending: pendingArticles, data: articles, error: errorArticles} = useLazyFetch(
        `https://www.marche.be/nuxt/posts.php?site=${siteSlug}&id=${categorySelected}`
    );
    return {
        pendingArticles,
        articles,
        errorArticles
    };
}