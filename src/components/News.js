import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import spinner from './spinner';


export class News extends Component {

  

  constructor(){
    super();
    console.log("hello i am a constructor from news components");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14f2cfcf7746423a8a22bd2c08219e55&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePreviousClick = async()=>{
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14f2cfcf7746423a8a22bd2c08219e55&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  handleNextClick = async()=>{
    console.log("Next");

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14f2cfcf7746423a8a22bd2c08219e55&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }

  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Top HeadLines</h2>
        <spinner></spinner>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
          </div>
        
      </div>
    )
  }
}

export default News

