import React, { Component } from 'react'
export default class NewsItem extends Component {
  render() {
    let {title,info,urlImage,linkr} = this.props;
    return (
      <div className='NewsItem'>
        <div className='main'>
            <img src={urlImage} alt='not Available'></img>
            <div className='main-title'>{title}...</div>
            <div className='text'>
            {info}....
            </div>
            <a href={linkr} target="_blank" rel="noopener noreferrer">View More</a>
        </div>
      </div>
    )
  }
}
