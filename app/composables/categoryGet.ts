export default (siteSlug: String, id: String) => {
    console.log(`https://www.marche.be/nuxt/category.php?site=${siteSlug}&id=${id}`)
    const {
        status,
        data,
        error
    } = useLazyFetch(`https://www.marche.be/nuxt/category.php?site=${siteSlug}&id=${id}`)
    return {
        status,
        data,
        error
    };
}