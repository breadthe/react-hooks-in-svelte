import { readable, type Readable, writable, type Writable, derived } from "svelte/store"
import type { Tile } from "./types"

export const selectedTile: Writable<number> = writable(0)

export const tiles: Readable<Tile[]> = readable([
    { id: 0, url: "/", label: "Home", title: "Home", icon: "home" },
    { id: 1, url: "/useState", label: "useState", title: "useState", icon: "code" },
    { id: 2, url: "/useEffect", label: "useEffect", title: "useEffect", icon: "code" },
    { id: 3, url: "/useMemo", label: "useMemo", title: "useMemo", icon: "code" },
    { id: 4, url: "/useRef", label: "useRef", title: "useRef", icon: "code" },
    { id: 5, url: "/useReducer", label: "useReducer", title: "useReducer", icon: "code" },
    { id: 6, url: "/useCallback", label: "useCallback", title: "useCallback", icon: "code" },
    { id: 7, url: "/useContext", label: "useContext", title: "useContext", icon: "code" }
])

export const hooks = derived(tiles, $tiles => $tiles.slice(1))
