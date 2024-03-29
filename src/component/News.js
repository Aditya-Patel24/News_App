import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state={
articles : [],
page:1

    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-13&sortBy=publishedAt&apiKey=6f85f05fc3bc4327aafba7c1e0f7041d&page=1&pageSize=21";
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles : parseData.articles})
  }
handleOnPrev=async ()=>{
  let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-13&sortBy=publishedAt&apiKey=6f85f05fc3bc4327aafba7c1e0f7041d&pageSize=21`;
  let data = await fetch(url);
  let parseData = await data.json();
  
this.setState({
page : this.state.page - 1,
articles : parseData.articles
})
  }
  handleOnNext=async ()=>{
    console.log("next");
    if(Math.ceil(this.state.page + 1>this.state.totalResults/21))
    {
      
    }
  else { let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-13&sortBy=publishedAt&apiKey=6f85f05fc3bc4327aafba7c1e0f7041d&page=${this.state.page + 1}&pageSize=21`;
    let data = await fetch(url);
    let parseData = await data.json();
    
this.setState({
  page : this.state.page + 1,
  articles : parseData.articles
})
  }}
  render() {
    return (
      <div className="container my-3">
        <h1>Sandesh</h1>
       <div className="row">
        {
        this.state.articles.map((element, index)=>{
        return <div key={element.url} className="col-md-4">
        <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage} urlId={element.url}/>
      </div>  })}
       </div>
  <div className=" d-flex justify-content-between" role="group" aria-label="Basic mixed styles example">
  <button disabled={this.setState.page<=1} type="button" className="btn btn-danger" onClick={this.handleOnPrev}>←Previous</button>
  <button type="button" className="btn btn-success" onClick={this.handleOnNext}>Next→</button>
   </div>   
</div>
    )
  }
}
export default News
// render() {
//   const { articles } = this.state;
//   const pageSize = 21; // Assuming the page size is fixed

//   return (
//     <div className="container my-3">
//       <h1>Sandesh</h1>
//       <div className="row">
//         {articles && articles.map((element) => (
//           <div key={element.url} className="col-md-4">
//             <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} urlId={element.url}/>
//           </div>
//         ))}
//       </div>
//       <div className="d-flex justify-content-between" role="group" aria-label="Basic mixed styles example">
//         <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handleOnPrev}>←Previous</button>
//         <button disabled={articles.length < pageSize} type="button" className="btn btn-success" onClick={this.handleOnNext}>Next→</button>
//       </div>   
//     </div>
//   );
// }

// }
// export default News