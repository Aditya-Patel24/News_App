import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state={
articles : []
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=6f85f05fc3bc4327aafba7c1e0f7041d";
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles : parseData.articles});
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Sandesh</h1>
       <div className="row">
        {this.state.articles.map((element)=>{
        return <div key="url" className="col-md-4">
        <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage} urlId={element.url}/>
      </div>  })}  
       </div>
      </div>
    )
  }
}

export default News
