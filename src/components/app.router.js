import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeContainer} />
        </Switch>
    </main>
)

export default AppRouter;
