<script>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css"
	import "@skeletonlabs/skeleton/styles/all.css"
	import "../app.postcss"
	import { selectedTile } from "../lib/store"
	import { page } from "$app/stores"
	import { AppShell, AppBar, AppRail, AppRailTile } from "@skeletonlabs/skeleton"
	import Icon from "../lib/Icon.svelte"

	let tile1Url = "/useState"
	let tile2Url = "/useEffect"
	let tile3Url = "/useMemo"
	let tile4Url = "/useRef"
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
				<AppRailTile
					label="Home"
					title="Home"
					value={0}
					tag="a"
					href="/"
					class={"/" === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon="home" /></AppRailTile
				>
				<AppRailTile
					label="useState"
					title="useState"
					value={1}
					tag="a"
					href={tile1Url}
					class={tile1Url === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon="code" /></AppRailTile
				>
				<AppRailTile
					label="useEffect"
					title="useEffect"
					value={2}
					tag="a"
					href={tile2Url}
					class={tile2Url === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon="code" /></AppRailTile
				>
				<AppRailTile
					label="useMemo"
					title="useMemo"
					value={3}
					tag="a"
					href={tile3Url}
					class={tile3Url === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon="code" /></AppRailTile
				>
				<AppRailTile
					label="useRef"
					title="useRef"
					value={4}
					tag="a"
					href={tile4Url}
					class={tile4Url === $page.url.pathname ? "bg-primary-500" : ""}><Icon icon="code" /></AppRailTile
				>
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
