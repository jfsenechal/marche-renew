export default () => {
    const {pending: pendingNews, data: news, error: errorNews} = useLazyFetch(
        `https://www.marche.be/nuxt/actus.php`
    );
    return {
        pendingNews,
        news,
        errorNews
    };
}