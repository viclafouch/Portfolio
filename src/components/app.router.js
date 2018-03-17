import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AddSkill from '../containers/AddSkill';

const AppRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={AddSkill} />
        </Switch>
    </main>
)

export default AppRouter;
