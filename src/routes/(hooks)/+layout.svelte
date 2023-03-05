<script>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css"
	import "@skeletonlabs/skeleton/styles/all.css"
	import "../../app.postcss"
	import { page } from "$app/stores"
	import { CodeBlock } from "@skeletonlabs/skeleton"
	import hljs from "highlight.js"
	import highlightjs from "highlightjs-svelte"
	import "highlight.js/styles/monokai-sublime.css"
	import { storeHighlightJs } from "@skeletonlabs/skeleton"
	import Icon from "$lib/Icon.svelte"
    import Header from "./Header.svelte"

	highlightjs(hljs)
	storeHighlightJs.set(hljs)
</script>

<!-- Page Route Content -->
<slot></slot>

<Header>
    <svelte:fragment slot="header">
        {$page.data.title}
    </svelte:fragment>
</Header>

<div class="flex flex-col sm:flex-row gap-8 p-4 sm:p-8">
	<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
		<h2 class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-react to-react/10 text-blue-900"><Icon icon="react" /> React</h2>

		<slot name="react-snippet" />
        <CodeBlock code={$page.data.react} language="jsx" />
	</div>
	<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
		<h2 class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-svelte to-svelte/10 text-orange-50"><Icon icon="svelte" /> Svelte</h2>

        <slot name="svelte-snippet" />
		<CodeBlock code={$page.data.svelte} language="svelte" />
	</div>
</div>
