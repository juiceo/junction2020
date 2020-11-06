import React, { useState } from 'react'
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Typography,
    TextField,
    Button,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const Assets: { [key: string]: string } = {
    CAR: 'Car',
    APARTMENT: 'Apartment',
}

interface Props {}
const Details = (props: Props) => {
    const classes = useStyles()
    const [step, setStep] = useState<number>(0)
    const [assets, setAssets] = useState<string[]>([])

    const handleChange = (event: any, checked: boolean) => {
        const { name } = event.target

        if (checked) {
            setAssets([...assets, name])
        } else {
            setAssets(assets.filter(a => a !== name))
        }
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.content}>
                <Typography variant="body1" align="center">
                    Let's fill out a few details first
                </Typography>
            </Box>
            <Box mt={3} className={classes.content}>
                <Stepper activeStep={step} orientation="vertical">
                    <Step>
                        <StepLabel>Income</StepLabel>
                        <StepContent>
                            <Typography>
                                Start by telling us how much money is coming in
                                monthly
                            </Typography>
                            <Box mt={2} />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="number"
                                label="Salary (after taxes)"
                            />
                            <Box mt={2} />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="number"
                                label="Other income"
                            />
                            <Box mt={2} />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => setStep(prev => prev + 1)}
                            >
                                Next
                            </Button>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Expenses</StepLabel>
                        <StepContent>
                            <Typography>
                                Your stable monthly expenses
                            </Typography>
                            <Box width="100%">
                                <Box mt={2} />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="number"
                                    label="Rent / living expenses"
                                />
                            </Box>
                            <Box mt={2} />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => setStep(prev => prev + 1)}
                            >
                                Next
                            </Button>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Assets</StepLabel>
                        <StepContent>
                            <Typography>
                                Which of the following items do you own?
                            </Typography>
                            <Box width="100%">
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        {Object.keys(Assets).map(
                                            (key: string) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={assets.includes(
                                                                key
                                                            )}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name={key}
                                                        />
                                                    }
                                                    label={Assets[key]}
                                                />
                                            )
                                        )}
                                    </FormGroup>
                                </FormControl>
                            </Box>
                            <Box mt={2} />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => setStep(prev => prev + 1)}
                            >
                                Next
                            </Button>
                        </StepContent>
                    </Step>
                </Stepper>
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

export default Details
