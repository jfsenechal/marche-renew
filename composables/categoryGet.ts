export default (siteSlug: String, categorySlug: String) => {
    const {
        pending: pendingCategory,
        data: category,
        error: errorCategory
    } = useLazyFetch(`https://www.marche.be/nuxt/category.php?site=${siteSlug}&slug=${categorySlug}`)
    return {
        pendingCategory,
        category,
        errorCategory
    };
}