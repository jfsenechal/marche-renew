export function doLink(site: String, type: String, id: Number, url: any) {
    if (type === 'custom')
        return url
    return `/${site}/${type}/${id}`;
}
