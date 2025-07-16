export default (siteSlug: String, articleId: Number, categorySelected:Number) => {
    console.log(  `https://www.marche.be/nuxt/post.php?site=${siteSlug}&id=${articleId}&category=${categorySelected}`)
    const {status, data , error} = useLazyFetch(
        `https://www.marche.be/nuxt/post.php?site=${siteSlug}&id=${articleId}&category=${categorySelected}`
    );
    return {
        status,
        data,
        error
    };
}