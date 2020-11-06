import React from 'react'
import { Box, Typography, Avatar, Theme, makeStyles } from '@material-ui/core'

import { PaletteColor } from '@material-ui/core/styles/createPalette'

type Props = {
    color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

const ColorPaletteDisplay = (props: Props) => {
    const classes = useStyles(props)
    return (
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Typography className={classes.colorName} variant="body1">
                {props.color}
            </Typography>
            <Box display="flex" flexDirection="row">
                <Box mr={1} mt={1}>
                    <Avatar className={classes.colorDark}>P</Avatar>
                </Box>
                <Box mr={1} mt={1}>
                    <Avatar className={classes.colorMain}>P</Avatar>
                </Box>
                <Box mr={1} mt={1}>
                    <Avatar className={classes.colorLight}>P</Avatar>
                </Box>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    colorName: {
        textTransform: 'capitalize',
    },
    colorDark: (props: Props) => {
        const color: PaletteColor = theme.palette[props.color]

        if (color) {
            return {
                background: color.dark,
                color: color.contrastText,
            }
        } else {
            return {
                opacity: 0,
            }
        }
    },
    colorMain: (props: Props) => {
        const color: PaletteColor = theme.palette[props.color]

        if (color) {
            return {
                background: color.main,
                color: color.contrastText,
            }
        } else {
            return {
                opacity: 0,
            }
        }
    },
    colorLight: (props: Props) => {
        const color: PaletteColor = theme.palette[props.color]

        if (color) {
            return {
                background: color.light,
                color: color.contrastText,
            }
        } else {
            return {
                opacity: 0,
            }
        }
    },
}))

export default ColorPaletteDisplay
