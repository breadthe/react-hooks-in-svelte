<script lang="ts">
	import CodeIcon from "./icons/Code.svelte"
	import GitHubIcon from "./icons/GitHub.svelte"
	import HomeIcon from "./icons/Home.svelte"
	import ReactIcon from "./icons/React.svelte"
	import SvelteIcon from "./icons/Svelte.svelte"

	export let icon: string
	export let color: string = ""
	export let title: string = ""
	export let size: number = 20
	export let klass: string = "" // Merge default classes with prop classes; aka "class" but it's an invalid keyword so wth

	const icons = [
		{ id: "code", component: CodeIcon },
		{ id: "github", component: GitHubIcon },
		{ id: "home", component: HomeIcon },
		{ id: "react", component: ReactIcon },
		{ id: "svelte", component: SvelteIcon }
	]
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 15 15"
	fill="none"
	stroke="currentColor"
    stroke-width="1"
	width={size}
	height={size}
	{title}
	class={`${color} ${klass}`}
>
	<svelte:component this={icons.find((i) => i.id === icon).component} />
</svg>
