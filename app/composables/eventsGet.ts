export default (limit: Number = 250) => {
    console.log(`https://visitmarche.be/api/events-nuxt.php?limit=${limit}`)
    const {status, data, error} = useFetch(
        `https://visitmarche.be/api/events-nuxt.php?limit=${limit}`
    );
    return {
        status,
        data,
        error
    };
}