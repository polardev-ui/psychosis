export async function onRequest(context) {
    const { env } = context;

    if (!env.VIEWS_KV) {
        console.error("VIEWS_KV binding is not configured for this Pages project.");
        return new Response(JSON.stringify({ views: 1 }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }

    let count = await env.VIEWS_KV.get("page_views");
    count = count ? parseInt(count, 10) : 0;

    count += 1;

    await env.VIEWS_KV.put("page_views", count.toString());

    return new Response(JSON.stringify({ views: count }), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
}
