import React from 'react';
import './style.css';

import Navbar from '../Navbar';
import Search from '../Search';
import Login from '../Login';

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
            <Login />
          </div>
        </div>
        <div className='header-search'>
          <Search
            categories={[
              "Men's Wear",
              "Women's Wear",
              'Kids',
              'Glasses'
            ]}
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
