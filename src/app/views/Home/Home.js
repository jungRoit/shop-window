import React from 'react';
import './style.css';

import Navbar from '../../components/Navbar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <div className='search-box'>
            <select className='search-categorySelector'>
              <option>All Category</option>
              <option>Mens's wear</option>
              <option>Womens's wear</option>
            </select>
            <input
              type='text'
              className='search-input'
              placeholder="Find what you're looking for"
            />
          </div>
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
