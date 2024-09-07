import {TestDirections} from "./TestDirections.tsx";
import {TileType} from "../types/Types.ts";


export const Scanning = (scanning: number[], scannedArray: number[], tileArray: TileType[]) => {
    const toTest = [...scanning] // we get every index that we want to test into an array
    console.log("scanning: ")
    
    for(let i = 0; i < toTest.length;) {
        let [
            newTestItems, 
            trashFoundIndex ] = 
            TestDirections(toTest[i], scannedArray, tileArray)
        
        if(trashFoundIndex != -1) {
            console.log("trash found at: " + trashFoundIndex)
            return trashFoundIndex
        }
        toTest.shift()
        toTest.push(...newTestItems)
    }
    
    
    return -1
} 