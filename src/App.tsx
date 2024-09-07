

import { MainPage } from "./page/MainPage"
import {Box, styled} from "@mui/material";

function App() {


  return (
    <>
      <AppRoot>
        <MainPage />
      </AppRoot>
    </>
  )
}

const AppRoot = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: 0,
    margin: 0,

})

export default App
