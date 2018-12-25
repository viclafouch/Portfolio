import React, { Component, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import ReCAPTCHA from 'react-google-recaptcha'
import './contact-form.scss'

const Input = memo(({ onChange, value, name, type = 'text' }) => (
  <input
    type={type}
    name={name}
    id={name}
    required
    spellCheck="false"
    className="form-input"
    onChange={onChange}
    value={value}
  />
))

const FieldsetItem = memo(({ label, valid, icon, inputOptions, children }) => (
  <label htmlFor={inputOptions.name} className="form-label">
    <span className="form-label-text">{label}</span>
    <div
      className={
        'form-field ' +
        (valid === true ? 'valid' : valid === false ? 'invalid' : '')
      }
    >
      <span className="form-ico">
        <FontAwesomeIcon icon={icon} />
      </span>
      {children ? children : <Input {...inputOptions} />}
    </div>
  </label>
))

export class ContactForm extends Component {
  constructor() {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      firstnameValid: null,
      lastnameValid: null,
      emailValid: null,
      messageValid: null,
      captchaValid: null,
      formValid: false,
      status: { display: false, valid: null, text: '' }
    }

    this.recaptchaRef = React.createRef()

    this.baseState = this.state
    this.handleChange = this.handleChange.bind(this)

    console.log('test')
  }

  handleChange({ target }) {
    const name = target.name
    const value = target.value
    return this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField(InputName, InputValue) {
    let firstnameValid = this.state.firstnameValid
    let lastnameValid = this.state.lastnameValid
    let emailValid = this.state.emailValid
    let messageValid = this.state.messageValid

    switch (InputName) {
      case 'firstname':
        firstnameValid = InputValue.length > 0
        break
      case 'lastname':
        lastnameValid = InputValue.length > 0
        break
      case 'email':
        emailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(
          String(InputValue).toLowerCase()
        )
        break
      case 'message':
        messageValid = InputValue.length > 0
        break
      default:
        break
    }

    return this.setState(
      {
        firstnameValid: firstnameValid,
        lastnameValid: lastnameValid,
        emailValid: emailValid,
        messageValid: messageValid
      },
      () => this.validateForm()
    )
  }

  validateForm = () =>
    this.setState(state => ({
      formValid:
        state.firstnameValid &&
        state.lastnameValid &&
        state.messageValid &&
        state.emailValid &&
        state.captchaValid === true
    }))

  recaptchaCallback = token =>
    this.setState({ captchaValid: token !== null }, () => this.validateForm())

  resetForm = () =>
    this.setState({ ...this.baseState }, () => this.recaptchaRef.reset())

  onSubmit = e => {
    e.preventDefault()
    if (!this.state.formValid) return
    console.log('submitted')
  }

  render() {
    return (
      <form
        className="form-contact flex-me flex-vertical"
        onSubmit={e => this.onSubmit(e)}
      >
        <FieldsetItem
          icon="user"
          label="Prénom"
          valid={this.state.firstnameValid}
          inputOptions={{
            name: 'firstname',
            value: this.state.firstname,
            onChange: this.handleChange
          }}
        />
        <FieldsetItem
          icon="user"
          label="Nom"
          valid={this.state.lastnameValid}
          inputOptions={{
            name: 'lastname',
            value: this.state.lastname,
            onChange: this.handleChange
          }}
        />
        <FieldsetItem
          icon="envelope"
          label="Email"
          valid={this.state.emailValid}
          inputOptions={{
            name: 'email',
            value: this.state.email,
            onChange: this.handleChange,
            type: 'email'
          }}
        />
        <FieldsetItem
          icon="pencil-alt"
          label="Message"
          valid={this.state.messageValid}
          inputOptions={{ name: 'message' }}
        >
          <textarea
            name="message"
            id="message"
            required
            spellCheck="false"
            rows="10"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.message}
          />
        </FieldsetItem>
        <FieldsetItem
          icon="shield-alt"
          label="Sécurité"
          valid={this.state.captchaValid}
          inputOptions={{ name: 'recaptcha' }}
        >
          <ReCAPTCHA
            ref={this.recaptchaRef}
            size="normal"
            theme="light"
            type="image"
            sitekey="6LegHVAUAAAAAK8cKu7NsdkpaC11KNNnIMTdd_xl"
            onChange={e => this.recaptchaCallback(e)}
          />
        </FieldsetItem>
        <Button primary disabled={!this.state.formValid}>
          Envoyer
        </Button>
      </form>
    )
  }
}

export default ContactForm
