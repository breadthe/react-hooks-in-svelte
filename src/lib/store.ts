import { writable, type Writable } from "svelte/store"

export const selectedTile: Writable<number> = writable(0)
