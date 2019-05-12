import React from 'react';
import './style.css';

import Header from '../../components/Header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='page-wrapper'>
        <Header />
      </div>
    );
  }
}
