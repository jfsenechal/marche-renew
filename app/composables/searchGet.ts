export default (keyword: String) => {
    console.log(  `https://www.marche.be/nuxt/search.php?s=${keyword}`)
    const {status, data , error} = useLazyFetch(
        `https://www.marche.be/nuxt/search.php?s=${keyword}`
    );
    return {
        status,
        data,
        error
    };
}