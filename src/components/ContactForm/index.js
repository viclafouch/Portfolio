import React, { Component } from 'react'
import classNames from 'classnames/bind';
import styles from './styles.css'
import FontAwesome from 'react-fontawesome'
import Button from '../Button';

let cx = classNames.bind(styles);

export default class ContactContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            firstnameValid: null,
            lastnameValid: null,
            emailValid: null,
            messageValid: null,
            formValid: false,
            note: {
                display: false,
                valid: null,
                text: ''
            }
        }

        this.baseState = this.state;

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.reset) {
            this.resetForm();
        }

        if (nextProps.error) {
            this.setState({
                note: {
                    display: true,
                    valid: false,
                    text: 'Une erreur est survenue, veuillez réessayez.'
                }
            })
        }
    }

    resetForm = () => {
        this.setState({
            ...this.baseState,
            note: {
                valid: true,
                display: true,
                text: 'Votre message a bien été envoyé !'
            }
        });
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value);
        });
    }

    validateField(InputName, InputValue) {
        let firstnameValid = this.state.firstnameValid;
        let lastnameValid = this.state.lastnameValid;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;

        switch (InputName) {
            case 'firstname':
                firstnameValid = InputValue.length > 0
                break;
            case 'lastname':
                lastnameValid = InputValue.length > 0
                break;
            case 'email':
                emailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(String(InputValue).toLowerCase())
                break;
            case 'message':
                messageValid = InputValue.length > 0
                break;
            default:
                break;
        }

        this.setState({
            firstnameValid: firstnameValid,
            lastnameValid: lastnameValid,
            emailValid: emailValid,
            messageValid: messageValid,
            note : this.baseState.note
        }, () => {
            this.validateForm();
        });
    }

    validateForm() {
        let { firstnameValid, lastnameValid, emailValid, messageValid } = this.state;
        this.setState({
            formValid: firstnameValid && lastnameValid && messageValid && emailValid === true
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.formValid) {
            return;
        }

        return this.props.sendForm({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        });
    }

    render() {

        return (
            <form className={cx('form')} onSubmit={(e) => this.onSubmit(e) }>
                <label htmlFor="firstname" className={cx('form-label')}>
                    <span className={cx('form-span')}>Prénom</span>
                    <div className={cx(
                        'form-field',
                        (this.state.firstnameValid === true ? 'valid' : ''),
                        (this.state.firstnameValid === false ? 'invalid' : ''),
                        )}>
                        <span className={cx('form-ico')}>
                            <FontAwesome name="user" />
                        </span>
                        <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        required
                        spellCheck="false"
                        className={cx('form-input')}
                        onChange={this.handleChange}
                        value={this.state.firstname}
                    />
                    </div>
                </label>
                <label htmlFor="lastname" className={cx('form-label')}>
                    <span className={cx('form-span')}>Nom</span>
                    <div className={cx(
                        'form-field',
                        (this.state.lastnameValid === true ? 'valid' : ''),
                        (this.state.lastnameValid === false ? 'invalid' : ''),
                        )}>
                        <span className={cx('form-ico')}>
                            <FontAwesome name="user" />
                        </span>
                        <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        required
                        spellCheck="false"
                        className={cx('form-input')}
                        onChange={this.handleChange}
                        value={this.state.lastname}
                    />
                    </div>
                </label>
                <label htmlFor="email" className={cx('form-label')}>
                    <span className={cx('form-span')}>Email</span>
                    <div className={cx(
                        'form-field',
                        (this.state.emailValid === true ? 'valid' : ''),
                        (this.state.emailValid === false ? 'invalid' : ''),
                        )}>
                        <span className={cx('form-ico')}>
                            <FontAwesome name="envelope" />
                        </span>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        spellCheck="false"
                        className={cx('form-input')}
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    </div>
                </label>
                <label htmlFor="message" className={cx('form-label')}>
                    <span className={cx('form-span')}>Message</span>
                    <div className={cx(
                        'form-field',
                        (this.state.messageValid === true ? 'valid' : ''),
                        (this.state.messageValid === false ? 'invalid' : ''),
                        )}>
                        <span className={cx('form-ico')}>
                            <FontAwesome name="pencil-square" />
                        </span>
                        <textarea
                        name="message"
                        id="message"
                        required
                        spellCheck="false"
                        rows="10"
                        className={cx('form-input')}
                        onChange={this.handleChange}
                        value={this.state.message}
                        ></textarea>
                    </div>
                </label>
                <Button primary disabled={!this.state.formValid} text='Envoyer' />
                <p className={cx(this.state.note.valid ? 'valid-message' : 'invalid-message')}>{this.state.note.text || ' ' }</p>
            </form>
        )
    }
}
