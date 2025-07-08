export default () => {
    const {status, data, error} = useFetch(
        `https://www.marche.be/nuxt/events.php`
    );
    return {
        status,
        data,
        error
    };
}