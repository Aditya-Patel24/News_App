import React, { Component } from 'react'
export class NewsItem extends Component {
  render()
  {
    let {title, description, imageurl, urlId} = this.props;
    return (
      <div className="my-3">
        <div className="card " style={{width: "18rem"}}>
  <img src={imageurl?imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0-82ELFvRIrelvLXTK7rKvja6eGcLn82vyqEO7Zpwg&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={urlId} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
export default NewsItem