import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import Validator from '../validation/signup';
import { loginData, signUp } from '../actions/index';

export class Auth extends Component {
  state = {
      showModalSignUp: false,
      showModalSignIn: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userName: '',
      password: '',
      location: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      redirecting: false,
    };

  toggleModalsignUp = () => {
    this.setState(prevState => ({
       showModalSignUp: !prevState.showModalSignUp ,
      }));
    }

  toggleModalsignIn = () => {
    this.setState(prevState => ({
      showModalSignIn: !prevState.showModalSignIn ,
     }));
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmitSignup = e => {
    e.preventDefault();
    const {
      firstName, lastName, email, phone, userName, password, location
    } = this.state;

    this.clearErrors();
    const emailError = Validator.validateEmail({ email });
    const usernameError = Validator.validateUsername({ userName });
    const passwordError = Validator.validatePassoword({ password });
    if (emailError) {
      return this.displayError(emailError, 'emailError');
    }
    if (usernameError) {
      return this.displayError(usernameError, 'usernameError');
    }
    if (passwordError) {
      return this.displayError(passwordError, 'passwordError');
    }

    const signUpData = {
      id: uuidv1(),
      firstName,
      lastName,
      email,
      phone,
      userName,
      password,
      location
    };
    // call action
    // eslint-disable-next-line react/prop-types
    this.props.signUp(signUpData);
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      email, password
    } = this.state;
    const postLoginData = {
      email,
      password
    };
    this.props.loginData(postLoginData);
  }

  displayError = (error, key) => {
    this.setState({ [key]: error });
  };

  clearErrors = () => this.setState(prevState => ({
    ...prevState,
    emailError: '',
    usernameError: '',
    passwordError: '',
  }));

  render() {
    const linkStyle = {
      backgroundColor: '#4e4edc'

    };

    const {
      showModalSignUp, showModalSignIn,
      firstName, lastName, email, phone, userName, password, location, emailError, usernameError, passwordError
    } = this.state;

    const {
      loginError
    } = this.props;

    // eslint-disable-next-line no-nested-ternary
    return showModalSignUp ? (
      <div className="container">
        <div className="navbar">
          <div className="navbar-header">
            <div className="navbar-title">
              <div className="logo">
                <img src={require('../../assets/logo.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="navbar-btn">
            <label htmlFor="navbar-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <input type="checkbox" id="navbar-check" />
          <div className="navbar-links">
            {/* <a href="./users">User</a> */}
            {' '}
            <button id="sign-up" onClick={this.toggleModalsignUp}>Sign Up</button>
            <button id="sign-in" onClick={this.toggleModalsignIn}>Sign In</button>
          </div>
        </div>
        <form className="animate" id="signUpForm" onSubmit={this.handleSubmitSignup}>
          <h3> Sign Up</h3>
          <label>First name</label>
          <input
            type="text"
            placeholder="Enter First name eg: Celestin"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="firstname-error" />
          <label>Last name</label>
          <input
            type="text"
            placeholder="Enter Last name eg: NIYONSABA"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="lastname-error" />
          <label>Email * </label>
          <input
            type="text"
            placeholder="Enter Email"
            className={`form-control ${emailError ? 'input-error' : ''}`}
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          {emailError && <div className="error">{emailError}</div>}
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone number eg: 0712345678"
            id="phone"
            value={phone}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="phone-error" />
          <label>Username *</label>
          <input
            type="text"
            placeholder="Enter Username eg: niayohd "
            id="userName"
            className={`form-control ${usernameError ? 'input-error' : ''}`}
            value={userName}
            onChange={this.handleChange}
            required
          />
          { usernameError && <div className="error">{usernameError}</div>}
          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter Password"
            className={`form-control ${passwordError ? 'input-error' : ''}`}
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          { passwordError && <div className="error">{passwordError}</div>}
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter location"
            id="location"
            value={location}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="location-error" />
          <div className="error" id="connection-error" />
          <button type="submit" id="btnSignUp">Sign Up</button>
          <div className="success" id="success-signup" />
          <div className="error" id="account-exist" />
        </form>
        <p className="signInlink">
          <div className="if-you-link">
            {' '}
            <h4>Are you a Member?</h4>
            <button onClick={this.toggleModalsignUp} style={linkStyle}>Sign In  </button>
            {' '}
          </div>
        </p>
      </div>
    ) : showModalSignIn ? (

      <div className="container">
        <div className="navbar">
          <div className="navbar-header">
            <div className="navbar-title">
              <div className="logo">
                <img src={require('../../assets/logo.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="navbar-btn">
            <label htmlFor="navbar-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <input type="checkbox" id="navbar-check" />
          <div className="navbar-links">
            {/* <a href="./users">User</a> */}
            {' '}
            <button id="sign-up" onClick={this.toggleModalsignUp}>Sign Up</button>
            <button id="sign-in" onClick={this.toggleModalsignIn}>Sign In</button>
          </div>
        </div>
        <form className="animate" id="signInForm" onSubmit={this.handleSubmit}>
          <h3> Sign In page</h3>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="error" id="incorrect-error" />
          <div className="error" id="connection-error-login" />
          {}
          <button type="submit" id="btn-sign-in" className="btn-submit">Sign In </button>
          <div className="success" id="success-login" />
          {loginError === 'Sorry, your email or password is incorrect' ? (<div className="error"> Sorry, your email or password is incorrect</div>) : false}
          <p className="signUplink">
            <div className="if-you-link">
              {' '}
              <h4>Not yet a Member?</h4>
              <button onClick={this.toggleModalsignUp} style={linkStyle}> Sign Up</button>
              {' '}
            </div>
          </p>
        </form>
      </div>
    ) : (
      <div>
        <div className="navbar">
          <div className="navbar-header">
            <div className="navbar-title">
              <div className="logo">
                <img src={require('../../assets/logo.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="navbar-btn">
            <label htmlFor="navbar-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <input type="checkbox" id="navbar-check" />
          <div className="navbar-links">
            {/* <a href="./users">User</a> */}
            {' '}
            <button id="sign-up" onClick={this.toggleModalsignUp}>Sign Up</button>
            <button id="sign-in" onClick={this.toggleModalsignIn}>Sign In</button>
          </div>
        </div>
        <div className="container">
          <h1>Welcome to Banka Application </h1>
        </div>

        <section id="main-section">
          <div className="container">
            <div className="panel">
              <img src={require('../../assets/open-account.jpg')} alt="Service" />
              <h1>Opening Account:</h1>
              <h3>Feel free to open an account by signup here</h3>
              <button onClick={this.toggleModalsignUp} className="get-stared-link">Get Started</button>
            </div>
            <div className="panel">
              <img src={require('../../assets/loan1.jpg')} alt="security" />
              <h1>Get a loan with us:</h1>
              <h3>
After getting an account,
                <br />
                <br />
                    you can start to request a loan
                <br />
              </h3>

            </div>
            <div className="panel">
              <img src={require('../../assets/security.jpg')} alt="Contact" />
              <h1>Feel the Security of your money</h1>
              <h3>We are here to make safe of your money security and profitability</h3>
            </div>
          </div>
        </section>
        <section id="main-section">
          <div className="container">
            <div className="panel2">
              <h2>Contact us</h2>
              <h3> Do you need any advice or helps?</h3>
              <h3>
Please Feel Free to Contact on our
                <address>Call (250) 783-067-644.</address>
                <address>Mail: celestin@banka.com</address>
              </h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state)=>( {
    loginError: state.newLogin.error,
    newUser: state.newUser
});

const Form = connect(mapStateToProps,{signUp, loginData})(Auth);
export default Form;
