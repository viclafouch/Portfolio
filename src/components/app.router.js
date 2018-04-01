import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Subheading } from './Subheading';
import classNames from 'classnames/bind';
import styles from './app.router.css'
import Footer from './Footer/Footer';
import ReactGA from 'react-ga';
import Page from '../pages-config'

const ga = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    return null;
};

let cx = classNames.bind(styles);
ReactGA.initialize('UA-106148014-1');

const AppRouter = () => (
    <div>
        <Header />
        <Navigation />
        <Subheading />
        <Route path="/" component={ga} />
        <main className={cx('main')}>
            <Switch>
                {
                    Page.map((page, index) =>
                        <Route
                            key={index}
                            exact={page.exact}
                            path={page.url}
                            component={page.component}
                        />
                    )
                }
            </Switch>
        </main>
        <Footer />
    </div>
)

export default AppRouter;
