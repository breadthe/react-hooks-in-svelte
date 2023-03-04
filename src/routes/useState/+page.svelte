<script>
	import Icon from "../../lib/Icon.svelte"
	import react from "./react.tsx?raw"
	import svelte from "./svelte.svelte?raw"
</script>

<h1 class="m-4 sm:m-8">useState</h1>

<div class="flex flex-col sm:flex-row gap-8 p-4 sm:p-8">
	<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
		<h2 class="flex items-center gap-2"><Icon icon="react" /> React</h2>

		<pre><code>{react}</code></pre>
	</div>
	<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
		<h2 class="flex items-center gap-2"><Icon icon="svelte" /> Svelte</h2>

		<pre><code>{svelte}</code></pre>
	</div>
</div>

<style>
</style>
