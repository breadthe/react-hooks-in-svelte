import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
    return {
        title: "useEffect",
        react: (await import("./react.jsx?raw")).default,
        svelte: (await import("./svelte.svelte?raw")).default,
    }
}) satisfies PageLoad;
