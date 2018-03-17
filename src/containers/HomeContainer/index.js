import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css'

class HomeContainer extends Component {
    render() {
        return(
            <div className={styles.table}>Hello HomeContainer</div>
        )
    }
}

export default HomeContainer;