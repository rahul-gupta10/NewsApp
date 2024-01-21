import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, imgurl, desc, newsurl ,publishedAt} = this.props;
    return (
      <>
      <div className="card cardDiv ">
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
        {this.props.source}</span>
        <img src={imgurl?imgurl:"https://demofree.sirv.com/nope-not-here.jpg"} className="card-img-top" alt="Unable to load data" />
        <div className="card-body">
            <h5 className="card-title"><abbr title={title}>{title?title.slice(0,40):""}...</abbr></h5>            
            <p className="card-text">{desc?desc.slice(0,50):""}...</p>
            <p className="card-text" style={{fontSize:"13px"}}><small className="text-muted" >Published on : {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' rel="noreferrer">Read more!</a>
        </div> 
     </div>
      
      </>
    )
  }
}
//GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=38fb55c8a2a146e5bbee01fb12808996
// apikey2= 2888afe3a4a846e991b59d23a343df31