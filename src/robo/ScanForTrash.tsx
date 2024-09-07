import {TileType} from "../types/Types.ts";
import {Scanning} from "./Scanning.tsx";


export const ScanForTrash = (roboCurrent: number, tileArray: TileType[]) => {
    // v { index, indexFrom }
    let scannedArray: [number] = [ roboCurrent ]
    let searching = [ roboCurrent ]
    console.log("Scan started ...")
    
    //if(trashFound === -1) console.log("No Trash Detected")
    return Scanning(searching, scannedArray, tileArray) // we will loop scanning until trash if found
    // Then we need to give robo its steps
}