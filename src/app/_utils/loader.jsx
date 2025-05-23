import { CircularProgress, ThemeProvider, LinearProgress } from "@mui/material"
import { colorTheme } from "./mui"


export function Loading () {
    return (
        <div className="w-full py-16">
            <div className="flex items-center justify-center place-self-center h-[150px]">
                <ThemeProvider theme={colorTheme}>
                    <LinearProgress color="secondary" sx={{width:250}} />
                </ThemeProvider>
            </div>
        </div>
    )
}

export function CircularLoading () {
    return(
        <ThemeProvider theme={colorTheme}>
            <CircularProgress size="1.5rem" color='primary'/>
        </ThemeProvider>
    )
}
