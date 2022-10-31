import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
export default class News extends Component {
  
  static defaultProps = {
        country : "in",
        category : "general",
        pageSize : 12
      }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  constructor(){
    super();
    // this.article = art;
    this.state = {
      article : [],
      loading : false,
      page:1,
    }
  }
  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38de334722614262ac942ba49abccaa3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading : true
    });
    let data = await fetch(url);
    let feData = await data.json();
    this.setState({
      article : feData.articles,
      totalResults : feData.totalResults,
      loading : false
    })
  }
  //////////////////////////////
  nextPage = async ()=>{
    console.log("nexttt");
    let rem = Math.ceil(this.state.totalResults/this.props.pageSize);
    if(this.state.page+1 > rem)
    {
        console.log("disabled");
        
    }
    else
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38de334722614262ac942ba49abccaa3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({
          loading : true
        });
        let data = await fetch(url);
        let feData = await data.json();
        this.setState({
          article : feData.articles,
          page : this.state.page+1,
          loading:false
        })
    }
  }
  prevPage = async ()=>{
    console.log("Previous");
    if(this.state.page - 1 <= 0 )
    {
        console.log("disabled");
   
    }
    else
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=38de334722614262ac942ba49abccaa3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({
          loading : true
        });
        let data = await fetch(url);
        let feData = await data.json();
        this.setState({
          article : feData.articles,
          page : this.state.page-1,
          loading : false
        })
    }
  }

  render() {
    
    return (
        <>
        
            <div className='News'>
                {this.state.loading && <Spinner/>}
                <div className='News-main'>

                  {!this.state.loading && this.state.article.map(
                  (element)=>{
                    
                    return <NewsItem key={element.url} urlImage ={element.urlToImage ? element.urlToImage : "https://reliefweb.int/modules/custom/reliefweb_meta/images/disaster-type/EP.png"} title={element.title ? element.title.slice(0,40) : ""} info={element.description ? element.description.slice(0,90) : ""}  linkr = {element.url}></NewsItem>
                    
                  }
                  )}
                </div>
               <div className='btn'>
                        <button disabled={this.state.page<=1} className='prev-btn' onClick={this.prevPage}>&larr; Previous</button>
                          <button   className='next-btn' onClick={this.nextPage}>Next 	&rarr;</button>
                </div>
            </div>
       </>
    )
  }
}

