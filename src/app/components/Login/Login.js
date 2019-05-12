import React from 'react';
import './style.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='login-box'>
        <input
          className='login-input'
          type='text'
          placeholder='usermane'
        />
        <input
          className='login-input'
          type='password'
          placeholder='password'
        />
        <button className='login-btn'> LOG IN </button>
      </div>
    );
  }
}
