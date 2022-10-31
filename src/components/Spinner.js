import React, { Component } from 'react'
import loader from './loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='Spinner'>
        <img src={loader} alt = "loaderr..."></img>
      </div>
    )
  }
}
