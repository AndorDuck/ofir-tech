import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 14,
        button: {
            textTransform: 'none',
        },
        h1: {
            fontSize: 30,
            fontWeight: 600,
            color: '#323232',
            wordBreak: 'break-word'
        },
        h2: {
            fontSize: 20
        },
        h2: {
            fontSize: 18
        },
        subtitle1: {
            fontWeight: 600
        },
        subtitle2: {
            fontSize: 13,
            color:'#777'
        },
        link: {
            color: '#337ab7'
        }

    }
})

export default responsiveFontSizes(theme, {factor: 2})