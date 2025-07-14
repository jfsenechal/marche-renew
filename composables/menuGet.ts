export default () => {
    const {
        status,
        data,
        error
    } = useLazyFetch(`https://www.marche.be/nuxt/menu.php`)
    return {
        status,
        data,
        error
    };
}