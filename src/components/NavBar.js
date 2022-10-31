import React, { Component } from 'react'
export default class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <div className='logo'>
          <h1>NewsX</h1>
        </div>
        <div className='content'>
        
           <li><a href='..'>business</a></li>
           <li><a href='..'>entertainment</a></li>
           <li><a href='..'>health</a></li>
           <li><a href='..'>science</a></li>
           <li><a href='..'>sports</a></li>
           <li><a href='..'>technology</a></li>
        
        </div>
      </div>
    )
  }
}
