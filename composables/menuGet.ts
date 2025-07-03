export default () => {
    const {
        pending: pendingMenu,
        data: menu,
        error: errorMenu
    } = useLazyFetch(`https://www.marche.be/nuxt/menu.php`)
    return {
        pendingMenu,
        menu,
        errorMenu
    };
}