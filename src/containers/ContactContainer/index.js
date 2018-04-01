import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import axios from 'axios'
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import SEO from '../../components/SEO';

import phpServer from './contact.php';

let cx = classNames.bind(styles);

export class ContactContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            reset: false,
            error: false
        }
    }

    onSubmit(datas) {
        let params = new URLSearchParams();

        for (let p in datas) {
            params.append(p, datas[p])
        }

        this.setState({
            isLoading: true,
            reset: false,
            error: false
        });

        let url;

        if (process.env.NODE_ENV === 'development') {
            url = 'http://portfolio.local/'
        } else {
            url = phpServer;
        }

        axios.post(url, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        .then(response => {
            if (!response.data) {
                throw new Error();
            }

            if (!response.data.success) {
                throw new Error();
            }

            this.setState({
                reset: true,
                isLoading: false
            }, () => {
                return;
            });
        })

        .catch((e) => {
            this.setState({
                error: true
            });
        })

        .finally(function() {
            this.setState({
                isLoading: false
            });
        })

    }

    render() {
        return (
            <section className={cx('contactcontainer')}>
                <SEO url={this.props.match.url} />
                <Title title="Contact" subtitle="M'envoyer un message" />
                <ContactForm
                    reset={this.state.reset}
                    error={this.state.error}
                    sendForm={(datas) => this.onSubmit(datas)} />
                { this.state.isLoading && <Loader /> }
            </section>
        )
    }
}

export default ContactContainer
