import React from 'react';
import './style.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='search-box'>
        <select className='search-categorySelector'>
          <option>All Categories</option>
          {this.props.categories.map(category => {
            return <option>{category}</option>;
          })}
        </select>
        <input
          type='text'
          className='search-input'
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
