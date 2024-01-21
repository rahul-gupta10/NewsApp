import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newscontainer extends Component {
  static defaultProps = {
    category: "general",
    apiKey: "38fb55c8a2a146e5bbee01fb12808996",
  };

  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
      pageSize: 10,
      totalResut: 0,
      newItem: 0,
      contry:"in"
    };
  }

  async newsfetch() {
    this.setState({ loading: true });
    const Apiurl = `https://newsapi.org/v2/top-headlines?country=${this.state.contry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(Apiurl);
    let parseData = await data.json();
    if (parseData.status === "ok") {
      this.setState({
        article: parseData.articles,
        totalResut: parseData.totalResults,
        loading: false,
      });
      document.title="News App- Total result "+this.state.totalResut
    } else {
      this.setState({ loading: false, message: parseData.message });
    }
  }

  async componentDidMount() {
    this.newsfetch();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  fetchMoreData= async() =>{
    this.setState({page:this.state.page+1})
    const Apiurl = `https://newsapi.org/v2/top-headlines?country=${this.state.contry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.state.pageSize}`;
    let data = await fetch(Apiurl);
    let parseData = await data.json();
    this.setState({
      article : this.state.article.concat(parseData.articles)
    })
    
  }

  
  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length+1 < this.state.totalResut}
          loader={<Loader/>}
        >
      <div className="container my-4">
      <div className="text-center">
        <h2>Top {this.capitalizeFirstLetter(this.props.category)} Headlines.</h2>
      </div>
        {this.state.loading && <Loader />}
        <div className="row">
          {this.state.message ? this.state.message :
            !this.state.loading && this.state.article.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    imgurl={element.urlToImage}
                    desc={element.description}
                    title={element.title}
                    newsurl={element.url}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}

        </div>
      </div>
      </InfiniteScroll>
    );
  }
}
