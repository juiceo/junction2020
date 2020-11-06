import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { PaletteColor } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        primary: PaletteColor
        secondary: PaletteColor
    }
}

const primary: PaletteColor = {
    main: '#d371d0',
    light: '#ffa2ff',
    dark: '#a85aa8',
    contrastText: '#000000',
}

const secondary: PaletteColor = {
    main: '#fc5185',
    light: '#ff86b4',
    dark: '#c40759',
    contrastText: '#000000',
}

const titleFont: string = ['"Montserrat"', 'sans-serif'].join(',')
const bodyFont: string = ['"Source Sans Pro"', 'sans-serif'].join(',')

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary,
        secondary,
    },
    typography: {
        fontFamily: bodyFont,
        htmlFontSize: 16,
        h1: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        h2: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        h4: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        h6: {
            fontFamily: titleFont,
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.25rem',
        },
        body2: {
            fontSize: '1.1rem',
        },
        subtitle1: {
            fontSize: '1.25rem',
        },
        subtitle2: {
            fontSize: '1.1rem',
        },
        button: {
            fontWeight: 'bold',
            fontSize: '1.1rem',
        },
        overline: {
            fontSize: '1.25rem',
        },
        caption: {
            fontSize: '1rem',
        },
    },
})

export default responsiveFontSizes(theme)
