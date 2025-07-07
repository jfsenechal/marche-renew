export default (siteSlug: String, articleId: Number) => {
    console.log(  `https://www.marche.be/nuxt/post.php?site=${siteSlug}&id=${articleId}`)
    const {status, data , error} = useLazyFetch(
        `https://www.marche.be/nuxt/post.php?site=${siteSlug}&id=${articleId}`
    );
    return {
        status,
        data,
        error
    };
}