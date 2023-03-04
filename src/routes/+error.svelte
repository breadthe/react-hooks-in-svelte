<script>
	import { page } from "$app/stores"
</script>

<div class="h-full flex flex-col items-center justify-center gap-4">
	<h1>{$page.status}</h1>
	<h2><em>{$page?.error?.message}</em></h2>

	{#if $page.status === 404}
		<em class="px-4 py-2 bg-primary-700 text-white rounded-full font-mono">{$page.url.pathname}</em>
	{/if}
</div>
