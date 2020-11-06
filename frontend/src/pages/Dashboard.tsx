import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {}
const Dashboard = (props: Props) => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.content}>
                <Typography variant="h4" align="center">
                    Dashboard
                </Typography>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3),
        },
        content: {
            borderRadius: 4,
            overflow: 'hidden',
            width: '100%',
            maxWidth: 600,
        },
    })
)

export default Dashboard
