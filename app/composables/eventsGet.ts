export default () => {
    console.log(`https://visitmarche.be/api/events-nuxt.php`)
    const {status, data, error} = useFetch(
        `https://visitmarche.be/api/events-nuxt.php`
    );
    return {
        status,
        data,
        error
    };
}