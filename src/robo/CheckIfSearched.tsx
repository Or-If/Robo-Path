import {TileType} from "../types/Types.ts";


export const CheckIfSearched = (tileArray: TileType, indexFrom: number) => {
    if(tileArray.searched || tileArray.value === " O ") return true // if already searched we will skip 
    tileArray.searched = true // now it has been searched
    tileArray.searchedFrom = indexFrom // keep track of where it was searched from
    return false
}