export default () => {
    console.log(`https://www.marche.be/nuxt/events.php`)
    const {status, data, error} = useFetch(
        `https://www.marche.be/nuxt/events.php`
    );
    return {
        status,
        data,
        error
    };
}