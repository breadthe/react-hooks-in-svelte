<script>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css"
	import "@skeletonlabs/skeleton/styles/all.css"
	import "../app.postcss"
	import { selectedTile } from "../lib/store"
	import { page } from "$app/stores"
	import { AppShell, AppBar, AppRail, AppRailTile } from "@skeletonlabs/skeleton"
	import Icon from "../lib/Icon.svelte"

	let tiles = [
		{ id: 0, url: "/", label: "Home", title: "Home", icon: "home" },
		{ id: 1, url: "/useState", label: "useState", title: "useState", icon: "code" },
		{ id: 2, url: "/useEffect", label: "useEffect", title: "useEffect", icon: "code" },
		{ id: 3, url: "/useMemo", label: "useMemo", title: "useMemo", icon: "code" },
		{ id: 4, url: "/useRef", label: "useRef", title: "useRef", icon: "code" },
		{ id: 5, url: "/useReducer", label: "useReducer", title: "useReducer", icon: "code" },
		{ id: 6, url: "/useCallback", label: "useCallback", title: "useCallback", icon: "code" },
		{ id: 7, url: "/useContext", label: "useContext", title: "useContext", icon: "code" }
	]
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="bg-primary-500">
			<svelte:fragment slot="lead">
				<a href="/" title="Home page"><strong class="text-xl uppercase">React vs Svelte</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/breadthe/react-vs-svelte"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- AppRail -->
		<AppRail selected={selectedTile}>
			<svelte:fragment slot="lead">
				<!-- AppRailTiles -->
				{#each tiles as tile (tile.id)}
					<AppRailTile
						label={tile.label}
						title={tile.title}
						value={tile.id}
						tag="a"
						href={tile.url}
						class={tile.url === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon={tile.icon} /></AppRailTile
					>
				{/each}
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<!-- AppRailTiles -->
				<AppRailTile
					label="GitHub"
					title="GitHub"
					tag="a"
					href="https://github.com/breadthe/react-vs-svelte"
					target="_blank"
					rel="noreferrer"><Icon icon="github" /></AppRailTile
				>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
