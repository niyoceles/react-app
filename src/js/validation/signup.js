/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
import React from 'react';

export default class Validator {
  static validateUsername(info) {
    const fields = Object.keys(info);
    let usernameError;
    for (const key of fields) {
      if (info[key].length < 5 || info[key].length > 10) {
        return (usernameError = (
          'Username should be more than 5 and less than 10 characters'
        ));
      }
    }
    return usernameError;
  }

  static validatePassoword(info) {
    const fields = Object.keys(info);
    let passwordError;
    const pwdRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    for (const key of fields) {
      if (pwdRegex.test(info[key]) === false) {
        return (passwordError = (
          'At least one uppercase and lowercase letter, one digit, a special and more than 8 character required for valid password'
        ));
      }
    }
    return passwordError;
  }

  static validateEmail(info) {
    const fields = Object.keys(info);
    let emailError;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    for (const key of fields) {
      if (emailRegex.test(info[key]) === false) {
        return (emailError = (
          'Please enter a valid email address e.g yournames@yahoo.com'
        ));
      }
    }
    return emailError;
  }
}
