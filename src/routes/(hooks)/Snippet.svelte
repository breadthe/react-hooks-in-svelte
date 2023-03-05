<script lang="ts">
	import { CodeBlock } from "@skeletonlabs/skeleton"
	import Icon from "$lib/Icon.svelte"

	export let framework: string
	export let code: any

	$: language = framework === "react" ? "jsx" : "svelte"
</script>

<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
	<h2
		class={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${
			framework === "react" ? "from-react to-react/10 text-blue-900" : "from-svelte to-svelte/10 text-orange-50"
		}`}
	>
		<Icon icon={framework} />
		{framework}
	</h2>

	<CodeBlock {code} {language} />
</div>
