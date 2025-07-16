export default () => {
    console.log(`https://visitmarche.be/api/events.php`)
    const {status, data, error} = useFetch(
        `https://visitmarche.be/api/events.php`
    );
    return {
        status,
        data,
        error
    };
}