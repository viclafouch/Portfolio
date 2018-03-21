import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Subheading } from './Subheading';
import classNames from 'classnames/bind';
import styles from './app.router.css'
import Footer from './Footer/Footer';
import Page from '../pages-config'
let cx = classNames.bind(styles);

const AppRouter = () => (
    <div>
        <Header />
        <Navigation />
        <Subheading />
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
