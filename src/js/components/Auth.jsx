import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { loginData, signUp } from '../actions/index';

export class Auth extends Component {
  constructor() {
    super();
    this.state = {
      showModalSignUp: false,
      showModalSignIn: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userName: '',
      password: '',
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);

    this.toggleModalsignUp = this.toggleModalsignUp.bind(this);
    this.toggleModalsignIn = this.toggleModalsignIn.bind(this);
  }

  toggleModalsignUp() {
    const { showModalSignUp } = this.state;
    this.setState({ showModalSignUp: !showModalSignUp });
  }

  toggleModalsignIn() {
    const { showModalSignIn } = this.state;
    this.setState({ showModalSignIn: !showModalSignIn });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmitSignup(e) {
    e.preventDefault();
    const {
      firstName, lastName, email, phone, userName, password, location
    } = this.state;

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

  handleSubmit(event) {
    event.preventDefault();
    const postLoginData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginData(postLoginData);
    console.log(this);
  }

  render() {
    const { showModalSignUp } = this.state;
    const { showModalSignIn } = this.state;

    // const { email } = this.state;
    // const { password } = this.state;
    // Getting the login data and token
    const userLogin = this.props.aaa.login;
    localStorage.setItem('token', userLogin.token);
    localStorage.setItem('userDetails', JSON.stringify(userLogin.data));
    if (userLogin.status === 200) {
      alert('Successful login');
      window.location = './users';
    }
    if (userLogin.status === 400) {
      alert(userLogin.error);
    }

    const {
      firstName, lastName, email, phone, userName, password, location
    } = this.state;

    const userSignup = this.props.newUser.item;
    localStorage.setItem('token', userSignup.token);
    localStorage.setItem('userDetails', JSON.stringify(userSignup.data));
    if (userSignup.status === 201) {
      alert('Successful signup');
      window.location = './users';
    }

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
            <a href="./users">User</a>
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
            placeholder="Enter First name"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="firstname-error" />
          <label>Last name</label>
          <input
            type="text"
            placeholder="Enter Last name"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="lastname-error" />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="email-error" />
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="Enter Phone number"
            id="phone"
            value={phone}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="phone-error" />
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="userName"
            value={userName}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="username-error" />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <div className="error" id="password-error" />
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
Are you a Member?
          {' '}
          <button onClick={this.toggleModalsignUp}>Sign In clinke </button>
          {' '}
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
            <a href="./users">User</a>
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
          <button type="submit" id="btn-sign-in" className="btn-submit">Sign In </button>
          <div className="success" id="success-login" />
          <p className="signUplink">
Not yet a Member?
            {' '}
            <button onClick={this.toggleModalsignUp}> Sign Up Link1 </button>
            {' '}
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
            <a href="./users">User</a>
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
              <button className="get-stared-link">Get Started</button>
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
function mapDispatchToProps(dispatch) {
  return {
    loginData: login => dispatch(loginData(login)),
    signUp: user => dispatch(signUp(user))
  };
}

function mapStateToProps(state) {
  return {
    aaa: state.newLogin,
    newUser: state.newUser
  };
}

const Form = connect(mapStateToProps, mapDispatchToProps)(Auth);
export default Form;
