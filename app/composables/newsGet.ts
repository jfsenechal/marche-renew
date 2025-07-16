export default () => {
    const {status, data, error} = useLazyFetch(
        `https://www.marche.be/nuxt/actus.php`
    );
    return {
        status,
        data,
        error
    };
}