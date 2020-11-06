import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'

import HomePage from './pages/Home'
import Onboarding from './pages/Onboarding'
import Details from './pages/Details'

function App() {
    return (
        <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            justifyContent="flex-start"
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={Onboarding} />
                    <Route exact path="/details" component={Details} />
                </Switch>
            </Router>
        </Box>
    )
}

export default App
