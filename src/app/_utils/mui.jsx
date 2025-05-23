import { createTheme } from "@mui/material";

export const colors = {
    "primary": "#000",
    "secondary": "#DD1A21",
    "background": "#FFF",
    "backgroundFeature": "rgba(224,50,44,0.40)",
    "formBG": "#E3595E",
}

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: colors.secondary,
        },
        secondary: {
            main: colors.secondary,
        },
    }
    
})