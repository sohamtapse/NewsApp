import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let {title, description, imgurl, newsurl} = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgurl?"https://i.ytimg.com/vi/x1WJSkblar0/maxresdefault.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
               