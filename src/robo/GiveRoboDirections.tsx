import {TileType} from "../types/Types.ts";

export const GiveRoboDirections = (trashIndexFound: number, roboCurrent: number, tileArray: TileType[]) => {
    let roboPath: [number] = [  ]
    console.log("we are now giving robo directions")
    
    GetNextStep(trashIndexFound, tileArray, roboPath, roboCurrent)
    console.log("robo path: " + roboPath)
    return roboPath;
}

// Untested, should recur through and get the steps for robo to move

const GetNextStep = (indexToFind: number, tileArray: TileType[], roboPath: [number], roboCurrent: number) => {
    if(indexToFind !== roboCurrent) {
        roboPath.push(indexToFind)
        GetNextStep(tileArray[indexToFind].searchedFrom, tileArray, roboPath, roboCurrent)
    } else {
        roboPath.push(indexToFind)
    }
}