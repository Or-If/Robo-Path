import {CheckIfSearched} from "./CheckIfSearched.tsx";
import {CheckIndexForTrash} from "./CheckIndexForTrash.tsx";
import {TileType} from "../types/Types.ts";


export const TestDirections = (index: number, scannedArray: number[], tileArray: TileType[]) => {
    let trashFoundIndex = -1
    let directionsBeingSentToTest = []
    
    console.log("checking directions around: " + index)
    let directions = [
        index - Math.sqrt(tileArray.length), // up
        index - 1, // left
        index + 1, // right
        index + Math.sqrt(tileArray.length), //down
    ]
    

    for (const e of directions) {
        if((e >= 0 && e <= 25) && !CheckIfSearched(tileArray[e], index)) {
            scannedArray.push( e ) // adds each checked tile
            directionsBeingSentToTest.push(e)
            if(CheckIndexForTrash(tileArray[e])) {
                trashFoundIndex = e
                break
            }
        } 
    }
    
    
    console.log("done checking directions: " + directionsBeingSentToTest)
    

    return [[...directionsBeingSentToTest] , trashFoundIndex ]
}