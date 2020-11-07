import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Dashboard from './pages/Dashboard';
import CreateUser from './pages/CreateUser';
import MakeBets from './pages/MakeBets';

function App() {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
            <Router>
                <Switch>
                    <Route exact path="/dashboard/:accountNumber" component={Dashboard} />
                    <Route exact path="/admin" component={CreateUser} />
                    <Route exact path="/yolobets" component={MakeBets} />
                </Switch>
            </Router>
        </Box>
    );
}

export default App;
