import React from 'react';
import './style.css';

import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Men's Wear", "Women's Wear", 'Kids', 'Glasses']
    };
  }
  render() {
    return (
      <div className='header'>
        <div className='header-top'>
          <div className='header-logo'>
            <h1 className='logo'>Shop window</h1>
            <h2 className='logo-subtext'>Your Personalized store</h2>
          </div>
          <div className='header-login'>
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
          </div>
        </div>
        <div className='header-search'>
          <Search
            categories={this.state.categories}
            placeholder={"Find what you're looking for"}
          />
        </div>
        <div className='header-bottom'>
          <Navbar
            navList={[
              'Top Sellers',
              "Today's Deal",
              'Weekly Offers',
              'New Arrivals',
              'Help'
            ]}
          />
          <div className='details' />
        </div>
      </div>
    );
  }
}
