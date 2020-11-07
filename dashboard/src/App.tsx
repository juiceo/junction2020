import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Router>
        </Box>
    );
}

export default App;
