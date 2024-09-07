import { styled, Box } from "@mui/material";
import  Tile  from '../components/Tile.tsx';
import Options from "../components/Options.tsx";
import {useEffect, useState} from "react";
import {TileType} from '../types/Types.ts'
import {RoboCycle} from "../robo/RoboCycle.tsx";



export const MainPage = () => {
    const [ roboCurrent, setRoboCurrent ] = useState<number>()
    const [ tileArray, setTileArray ] = useState<TileType[]>([]);
    const spaces = 25
    
    const addTrash = (id: number) => {
        //TODO: this currently goes through all of the tiles, find a way to only do one
        setTileArray( tileArray.map(( e, index) => {
            if( index === id ) e.value = "a"
            if( index === roboCurrent) {
                e.value = " O "
                e.searchedFrom = -1
            }
            return e
        })) 
    }
    
    useEffect(() => {
        let startArray = [];
        const robotStart = Math.floor( spaces / 2)
        
        for(let i = 0; i < spaces; i++) {
            startArray[i] = {value: ( i === robotStart ? " O " : "."), searched: false, searchedFrom: ( i === robotStart ? i : -1), id: i}
        }
        setRoboCurrent(robotStart)
        setTileArray(startArray)
    }, [])

    useEffect(() => {
        console.log("he be moving")
        
    }, [roboCurrent]);
    
    return (
        <>
            <MainRoot >
                <Options onClick={() => RoboCycle(roboCurrent, setRoboCurrent , tileArray) }/>
                <Box sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: `repeat(${Math.sqrt(spaces)}, 1fr)`}} >
                    { tileArray.map((t, index) => {
                        return <Tile onClick={ addTrash } key={index ++} child={t.value} id={index ++}/>
                    })}
                </Box>
            </MainRoot>
        </>
    )
}

const MainRoot = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 28,

})

/*
const ArrayGrid = styled(Box)( ({spaces}) => {
    const columns = Math.sqrt(spaces)
    
    return {
    display: "grid",
    gap: 1,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    
}})\
 */