export default () => {
    const {pending: pendingEvents, data: events, error: errorEvents} = useLazyFetch(
        `https://www.marche.be/nuxt/events.php`
    );
    return {
        pendingEvents,
        events,
        errorEvents
    };
}