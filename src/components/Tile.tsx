import { styled, Box } from "@mui/material"

const enum FilledOptions {
  robot,
  garbage,
  empty
}

interface TileProps {
  child: string
  id: number
  onClick: (id) => void
  filled?: FilledOptions
}

const Tile = ({child, id, onClick} : TileProps) => {
  
  

  return (
    <TileRoot onClick={() => { onClick(id) }}>
      <div>{child}</div>
    </TileRoot>
  )
}


const TileRoot = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "2px solid black"
})

export default Tile