import React from 'react'
import {
    Box,
    Grid,
    Typography,
    createStyles,
    WithStyles,
    Theme,
    withStyles,
    Button,
    TextField,
    Switch,
    Menu,
    MenuItem,
    CircularProgress,
} from '@material-ui/core'

import { lighten } from '@material-ui/core/styles'
import ColorPaletteDisplay from '../components/ColorPaletteDisplay'

interface OwnProps {}
type Props = OwnProps & WithStyles<typeof styles>

const HomePage = (props: Props) => {
    const { classes } = props

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                className={classes.top}
            >
                <Box className={classes.topMiddle}>
                    <Typography variant="h2" gutterBottom>
                        React + TypeScript Template
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Create React App
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        TypeScript
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Dark Material UI theme setup
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Eslint & Prettier config
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Github Actions for automatic deployment to Cloudflare
                        Workers
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                    >
                        <Box className={classes.topCircle} />
                        <Box className={classes.topDiamond} />
                        <Box className={classes.topSquare} />
                    </Box>
                </Box>
            </Box>
            <Box p={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box className={classes.block}>
                            <Typography variant="h1" gutterBottom>
                                Heading 1
                            </Typography>
                            <Typography variant="h2" gutterBottom>
                                Heading 2
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                Heading 3
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Heading 4
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Heading 5
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Heading 6
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris id euismod magna, in
                                facilisis lacus. Nunc malesuada a justo et
                                gravida.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Fusce eu aliquam lorem. Etiam maximus viverra
                                auctor. Duis a augue quis ligula molestie congue
                                quis ac libero. Donec pellentesque nibh non
                                tellus euismod, et commodo metus imperdiet.
                                Vestibulum mattis, mauris imperdiet condimentum
                                condimentum, nisi mi viverra risus, eget lacinia
                                magna velit ut neque. Integer pharetra lorem sed
                                libero pretium, eu vehicula magna tempus.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className={classes.block}>
                            <ColorPaletteDisplay color="primary" />
                            <ColorPaletteDisplay color="secondary" />
                            <Box mt={3}></Box>
                            <ColorPaletteDisplay color="success" />
                            <ColorPaletteDisplay color="info" />
                            <ColorPaletteDisplay color="warning" />
                            <ColorPaletteDisplay color="error" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            className={classes.block}
                            display="flex"
                            alignItems="center"
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                flexWrap="wrap"
                                justifyContent="center"
                            >
                                <Box p={1}>
                                    <Button variant="contained" color="primary">
                                        Primary
                                    </Button>
                                </Box>
                                <Box p={1}>
                                    <Button variant="outlined" color="primary">
                                        Primary
                                    </Button>
                                </Box>
                                <Box p={1}>
                                    <Button variant="text" color="primary">
                                        Primary
                                    </Button>
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Box p={1}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Secondary
                                    </Button>
                                </Box>
                                <Box p={1}>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Secondary
                                    </Button>
                                </Box>
                                <Box p={1}>
                                    <Button variant="text" color="secondary">
                                        Secondary
                                    </Button>
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="row"
                                alignItems="flex-start"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Box p={1}>
                                    <TextField
                                        id="standard-basic"
                                        label="Standard"
                                    />
                                </Box>
                                <Box p={1}>
                                    <TextField
                                        id="filled-basic"
                                        label="Filled"
                                        variant="filled"
                                    />
                                </Box>
                                <Box p={1}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Outlined"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="row"
                                alignItems="flex-start"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Box p={1}>
                                    <TextField
                                        id="standard-basic"
                                        label="Error"
                                        error
                                        helperText="Invalid data"
                                    />
                                </Box>
                                <Box p={1}>
                                    <TextField
                                        id="filled-basic"
                                        label="Helper text"
                                        helperText="Just type something in the field"
                                    />
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="row"
                                alignItems="flex-start"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Box p={1}>
                                    <Switch defaultChecked color="primary" />
                                </Box>

                                <Box p={1}>
                                    <Switch defaultChecked color="secondary" />
                                </Box>
                                <Box p={1}>
                                    <CircularProgress />
                                </Box>
                                <Box p={1}>
                                    <CircularProgress color="secondary" />
                                </Box>
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                flexDirection="row"
                                alignItems="flex-start"
                                justifyContent="center"
                                flexWrap="wrap"
                            >
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    Open Menu
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.block}>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography
                                    className={classes.breakpointLabel}
                                    variant="h6"
                                >
                                    XS
                                </Typography>

                                <Box className={classes.breakpointXs} />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography
                                    className={classes.breakpointLabel}
                                    variant="h6"
                                >
                                    SM
                                </Typography>

                                <Box className={classes.breakpointSm} />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography
                                    className={classes.breakpointLabel}
                                    variant="h6"
                                >
                                    MD
                                </Typography>
                                <Box className={classes.breakpointMd} />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography
                                    className={classes.breakpointLabel}
                                    variant="h6"
                                >
                                    LG
                                </Typography>

                                <Box className={classes.breakpointLg} />
                            </Box>
                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="space-between"
                            >
                                <Typography
                                    className={classes.breakpointLabel}
                                    variant="h6"
                                >
                                    XL
                                </Typography>

                                <Box className={classes.breakpointXl} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const styles = (theme: Theme) =>
    createStyles({
        top: {
            background: theme.palette.primary.main,
            height: '700px',
            padding: theme.spacing(3),
        },
        topMiddle: {
            background: theme.palette.background.default,
            padding: theme.spacing(4),
            textAlign: 'center',
            borderRadius: '30px',
        },
        topCircle: {
            background: theme.palette.secondary.main,
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            margin: theme.spacing(2),
        },
        topDiamond: {
            background: theme.palette.secondary.main,
            width: '60px',
            height: '60px',
            transform: 'rotate(45deg)',
            margin: theme.spacing(2),
        },
        topSquare: {
            background: theme.palette.secondary.main,
            width: '70px',
            height: '70px',
            margin: theme.spacing(2),
        },
        block: {
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            background: lighten(theme.palette.background.default, 0.05),
            borderRadius: '15px',
        },
        breakpointLabel: {
            width: '100px',
        },
        breakpointXs: {
            maxWidth: theme.breakpoints.values.xs + 30,
            flex: 1,
            height: theme.spacing(3),
            background: theme.palette.success.main,
            opacity: 0.2,
            [theme.breakpoints.up('xs')]: {
                opacity: 1,
            },
            [theme.breakpoints.up('sm')]: {
                opacity: 0.2,
            },
        },
        breakpointSm: {
            maxWidth: theme.breakpoints.values.sm,
            flex: 1,
            height: theme.spacing(3),
            background: theme.palette.success.main,
            opacity: 0.2,
            [theme.breakpoints.up('sm')]: {
                opacity: 1,
            },
            [theme.breakpoints.up('md')]: {
                opacity: 0.2,
            },
        },
        breakpointMd: {
            maxWidth: theme.breakpoints.values.md,
            flex: 1,
            height: theme.spacing(3),
            background: theme.palette.success.main,
            opacity: 0.2,
            [theme.breakpoints.up('md')]: {
                opacity: 1,
            },
            [theme.breakpoints.up('lg')]: {
                opacity: 0.2,
            },
        },
        breakpointLg: {
            maxWidth: theme.breakpoints.values.lg,
            flex: 1,
            height: theme.spacing(3),
            background: theme.palette.success.main,
            opacity: 0.2,
            [theme.breakpoints.up('lg')]: {
                opacity: 1,
            },
            [theme.breakpoints.up('xl')]: {
                opacity: 0.2,
            },
        },
        breakpointXl: {
            maxWidth: theme.breakpoints.values.xl,
            flex: 1,
            height: theme.spacing(3),
            background: theme.palette.success.main,
            opacity: 0.2,
            [theme.breakpoints.up('xl')]: {
                opacity: 1,
            },
        },
    })
export default withStyles(styles)(HomePage)
