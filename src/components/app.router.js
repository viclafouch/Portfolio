import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import { Header } from './Header';
import { Navigation } from './Navigation';

const AppRouter = () => (
    <div>
        <Header />
        <Navigation />
        <main>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
            </Switch>
        </main>
    </div>
)

export default AppRouter;
