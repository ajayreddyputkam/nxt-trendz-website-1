// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  noteTheUsername = event => {
    this.setState({username: event.target.value, errorMsg: ''})
  }

  noteThePassword = event => {
    this.setState({password: event.target.value, errorMsg: ''})
  }

  navigateToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  authenticateTheUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.navigateToHome()
      this.setState({errorMsg: ''})
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {errorMsg} = this.state

    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="brand-logo-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-logo"
        />
        <form
          className="username-password-container"
          onSubmit={this.authenticateTheUser}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="brand-logo-lg"
          />
          <div className="username-container">
            <label htmlFor="username" className="username-label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="username-input"
              placeholder="Username"
              onChange={this.noteTheUsername}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password" className="password-label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="password-input"
              placeholder="Password"
              onChange={this.noteThePassword}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {errorMsg === '' ? (
            errorMsg
          ) : (
            <p className="invalid-des">{errorMsg}</p>
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
