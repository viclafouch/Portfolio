import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Subheading } from './Subheading';
import classNames from 'classnames/bind';
import styles from './app.router.css'
import Footer from './Footer/Footer';
let cx = classNames.bind(styles);

const AppRouter = () => (
    <div>
        <Header />
        <Navigation />
        <Subheading />
        <main className={cx('main')}>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
            </Switch>
        </main>
        <Footer />
    </div>
)

export default AppRouter;
