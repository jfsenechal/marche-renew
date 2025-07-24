export default (limit: Number = 250) => {
    console.log(`https://www.marche.be/nuxt/events.php?limit=${limit}`)
    const {status, data, error} = useFetch(
        `https://www.marche.be/nuxt/events.php?limit=${limit}`
    );
    console.log(status.value, error.value, data.value);
    return {
        status,
        data,
        error
    };
}