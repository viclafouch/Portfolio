import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Subheading } from './Subheading';
import classNames from 'classnames/bind';
import styles from './app.router.css'
import Footer from './Footer/Footer';
import { FormationsContainer } from '../containers/FormationContainer';
import { ProductionsContainer } from '../containers/ProductionsContainer';
import { SkillContainer } from '../containers/SkillsContainer';
let cx = classNames.bind(styles);

const AppRouter = () => (
    <div>
        <Header />
        <Navigation />
        <Subheading />
        <main className={cx('main')}>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/formations' component={FormationsContainer} />
                <Route path='/productions' component={ProductionsContainer} />
                <Route path='/competences' component={SkillContainer} />
            </Switch>
        </main>
        <Footer />
    </div>
)

export default AppRouter;
