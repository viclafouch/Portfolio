import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import Title from '../../components/Title';
import axios from 'axios'
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import SEO from '../../components/SEO';

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

        axios.post('http://portfolio.local/', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'HTTP_TOKEN': process.env.TOKEN
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
                reset: true
            });
        })

        .catch(() => {
            this.setState({
                error: true
            });
        })

        .finally(() => {
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
