export function extractId(idString: String): { type: String, id: Number, site: String } {
    const sites = {
        1: 'citoyen',
        2: 'administration',
        3: 'economie',
        4: 'tourisme',
        7: 'social',
        5: 'sport',
        6: 'sante',
        14: 'enfant',
        11: 'culture',
        12: 'roman'
    };

    // Pattern 1: bottin_cat_648 (extract 1 value)
    const bottinPattern = /^bottin_cat_(\d+)$/;
    const bottinMatch = idString.match(bottinPattern);
    if (bottinMatch && bottinMatch.length > 0) {
        return {
            type: 'bottin',
            id: parseInt(bottinMatch[1]),
            site: 'economie'
        };
    }

    // Pattern 2: category-23-14 (extract 2 values)
    const categoryPattern = /^category-(\d+)-(\d+)$/;
    const categoryMatch = idString.match(categoryPattern);
    if (categoryMatch && categoryMatch.length > 0) {
        return {
            type: 'category',
            id: parseInt(categoryMatch[1]),
            site: sites[parseInt(categoryMatch[2])]
        };
    }

    // Pattern 3: post-3900-7 (extract 2 values)
    const postPattern = /^post-(\d+)-(\d+)$/;
    const postMatch = idString.match(postPattern);
    if (postMatch && postMatch.length > 0) {
        return {
            type: 'article',
            id: parseInt(postMatch[1]),
            site: sites[parseInt(postMatch[2])]
        };
    }

    // No pattern matched
    return {
        type: 'unknown',
        id: 0,
        site: 'citoyen'
    };
}
