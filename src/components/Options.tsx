import {Box, styled} from "@mui/material";


interface OptionsProps {
    onClick: () => void
}

const Options = ({ onClick } : OptionsProps) => {
    return (
        <>
            <OptionsRoot>
                <button onClick={onClick}>
                    Start
                </button>
            </OptionsRoot>
        </>
    )
}


const OptionsRoot = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})

export default Options