import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import { Header } from './Header';

const AppRouter = () => (
    <div>
        <Header />

        <main>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
            </Switch>
        </main>
    </div>
)

export default AppRouter;
