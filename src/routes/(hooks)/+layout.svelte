<script lang="ts">
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

    let reactSize: number
    let svelteSize: number
    let diff: number
    let percentageSmaller: number
    let cleanedReact: string // the source code stripped of comments and empty lines
    let cleanedSvelte: string // the source code stripped of comments and empty lines

    const stripComments = (code: string) => code.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '')
    const stripEmptyLines = (code: string) => code.replace(/^[ \t]*\n/gm, '')

    $: {
        cleanedReact = stripEmptyLines(stripComments($page.data.react))
        cleanedSvelte = stripEmptyLines(stripComments($page.data.svelte))

        reactSize = cleanedReact.length
        svelteSize = cleanedSvelte.length
        diff = Math.abs(reactSize - svelteSize)
        percentageSmaller = Math.round((diff / reactSize) * 100)
    }
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
		<h2 class="flex items-center justify-between px-4 py-2 rounded-full bg-gradient-to-r from-react to-react/10 text-blue-900">
            <span class="flex items-center gap-2"><Icon icon="react" /> React</span>
            <span class="px-4 py-2 rounded-full bg-white/30 text-sm text-black dark:text-white font-medium">{reactSize} characters</span>
        </h2>

		<slot name="react-snippet" />
        <CodeBlock code={$page.data.react} language="jsx" />
	</div>
	<div class="w-full sm:w-1/2 flex flex-col gap-2 sm:gap-4">
		<h2 class="flex items-center justify-between px-4 py-2 rounded-full bg-gradient-to-r from-svelte to-svelte/10 text-orange-50">
            <span class="flex items-center gap-2"><Icon icon="svelte" /> Svelte</span>
            <span class="px-4 py-2 rounded-full bg-white/30 text-sm text-black dark:text-white font-medium">{svelteSize} characters ({percentageSmaller}% less)</span>
        </h2>

        <slot name="svelte-snippet" />
		<CodeBlock code={$page.data.svelte} language="svelte" />

	</div>
</div>
