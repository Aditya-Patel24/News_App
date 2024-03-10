import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h1>Sandesh </h1>
       <div className="row">
      <div className="col-md-4">
        <NewsItem title="mytitle" description="mydes"/>
      </div>  
      <div className="col-md-4">
        <NewsItem title="mytitle" description="mydes"/>
      </div>  
      <div className="col-md-4">
        <NewsItem title="mytitle" description="mydes"/>
      </div>  
       </div>
      </div>
    )
  }
}

export default News
