
export  type SingleSearchedTile = {
    index: number;
    indexFrom: number;
} //

export type SearchedTiles = [ SingleSearchedTile ] //

export type TrashFound = {
    index: number;
    trashFound: boolean;
} //

export type TileType = {
    id: number // I dont know if this one is even needed
    value: string
    searched: boolean
    searchedFrom: number
}