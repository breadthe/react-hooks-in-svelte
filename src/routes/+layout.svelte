<script>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css"
	import "@skeletonlabs/skeleton/styles/all.css"
	import "../app.postcss"
	import { selectedTile, tiles } from "../lib/store"
	import { page } from "$app/stores"
	import { AppShell, AppBar, AppRail, AppRailTile, LightSwitch } from "@skeletonlabs/skeleton"
	import Icon from "../lib/Icon.svelte"
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
                <!-- <LightSwitch /> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- AppRail -->
		<AppRail selected={selectedTile}>
			<svelte:fragment slot="lead">
				<!-- AppRailTiles -->
				{#each $tiles as tile (tile.id)}
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
