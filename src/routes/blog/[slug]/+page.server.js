export function load({ params }) {
    let title = params.slug;
    return { title: params.slug };
}
