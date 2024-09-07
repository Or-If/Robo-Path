import {ScanForTrash} from "./ScanForTrash.tsx";
import {GiveRoboDirections} from "./GiveRoboDirections.tsx";
import {TileType} from "../types/Types.ts";


export const RoboCycle = (roboCurrent: number | undefined, setRoboCurrent, tileArray: TileType[]) => {
    if(!roboCurrent) return null
    console.log("robo starts up, and will start scanning")
    // scanning for trash should get us back a list of all 
    let trashFoundIndex  = ScanForTrash(roboCurrent, tileArray)
    
    console.log("we just finished scanning for trash")
    
    console.log("trash found index: " + trashFoundIndex)
    
    let robotMovements = GiveRoboDirections(trashFoundIndex, roboCurrent, tileArray)
    
    console.log("instructions generated now we will move: " + robotMovements)
    MoveRobo(robotMovements, tileArray, setRoboCurrent)
}

//TODO: Rename our basic info below and pass things better

// We are wanting to check areas around for trash { array.value === 'a' }
// We are needing 
// - robots location { index }
// - full array { array } 
// - a way to keep track of which locations we have chekced and where we checked them from scannedArray*
// ------ can either be done with info held in array or an array that points to it
//


const MoveRobo = async (roboMovements, tileArray, setRoboCurrent) => {
    const howManyRepeats = roboMovements.length - 1
    
    for (let i = 0; i < howManyRepeats; i++) {
        console.log("iteration : " + i)
        setTimeout(() => {
            let currentSpace = roboMovements.pop()
            let nextSpace = roboMovements[roboMovements.length - 1]
            setRoboCurrent(nextSpace)
            console.log("current space: " + currentSpace + ", next space: " + nextSpace)

            MoveTo(currentSpace, nextSpace, tileArray)
        }, 1000 * i)
    }
}

const MoveTo = (currentSpace, nextSpace, tileArray) => {
    tileArray[currentSpace].value = " . "
    tileArray[nextSpace].value = " O "
}