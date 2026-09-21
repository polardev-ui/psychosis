export async function onRequest(context) {
    const { env } = context;

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
