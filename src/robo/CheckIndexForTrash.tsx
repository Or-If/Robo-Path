import {TileType} from "../types/Types.ts";

export  const CheckIndexForTrash = (tile: TileType) => {
    console.log("tile being checked for trash: " + tile.id + " from index: " + tile.searchedFrom + " has trash: " + (tile.value === "a") )
    return tile.value === "a";
}