import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import WebFont from 'webfontloader'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

WebFont.load({
    google: {
        families: ['Montserrat:700', 'Source+Sans+Pro:400,700'],
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
