export default (codeCgt: String) => {
    console.log(`https://www.visitmarche.be/api/event.php?code=${codeCgt}`)
    const {status, data, error} = useLazyFetch(
        `https://www.visitmarche.be/api/event.php?code=${codeCgt}`
    );
    return {
        status,
        data,
        error
    };
}