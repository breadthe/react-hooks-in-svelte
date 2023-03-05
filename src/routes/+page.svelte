<script lang="ts">
	import { hooks } from "$lib/store"
</script>

<div class="container h-full mx-auto p-4 sm:p-8 flex flex-col gap-8 sm:gap-16 sm:justify-center items-center">
	<div class="space-y-4 text-center">
		<h1 class="font-bold">React hooks vs Svelte</h1>
		<h2>
			based on <a href="https://github.com/joshnuss/react-hooks-in-svelte" target="_blank" rel="noreferrer"
				>React hooks in Svelte</a
			>
			by <a href="https://twitter.com/joshnuss" target="_blank" rel="noreferrer">Josh Nuss</a>
		</h2>
		<p>
			Side-by-side code examples of React hooks implemented in Svelte. A reference for developers who need to work
			across Svelte and React.
		</p>
	</div>

	<div class="flex flex-wrap gap-4 sm:gap-8">
		{#each $hooks as hook (hook.id)}
			<a href={hook.url} title={hook.title} class="card w-full sm:w-1/5 p-4">
				{hook.label}
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
