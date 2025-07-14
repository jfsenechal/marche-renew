export default (codeCgt: String) => {
    console.log(`https://www.marche.be/nuxt/event.php?code=${codeCgt}`)
    const {status, data, error} = useLazyFetch(
        `https://www.marche.be/nuxt/event.php?code=${codeCgt}`
    );
    return {
        status,
        data,
        error
    };
}