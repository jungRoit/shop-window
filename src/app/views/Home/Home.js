import React from 'react';
import './style.css';


export default class Home extends React.Component {
constructor(props) {
  super(props);
  this.state= {

  }
}
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
        <div className='header-logo'>
          <h1 className='logo'>Shop window</h1>
        </div>
        <div className='header-login'>
         <div className='login-box'>
         <input className='login-input' type='text' placeholder='usermane' />
          <input className='login-input' type='password' placeholder='password'/>
          <button className='login-btn'> LOG IN </button>
          </div>
        </div>
        </div>
      </div>
    )
  }
}