import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader";

export default class Newscontainer extends Component {
  static defaultProps = {
    category: "general",
    apiKey: "2888afe3a4a846e991b59d23a343df31",
    cntry: "in",
  };
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
      pageSize: 9,
      totalResut: 0,
      newItem: 0,
    };
  }

  async newsfetch() {
    this.setState({ loading: true });
    const Apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.cntry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    let data = await fetch(Apiurl);
    let parseData = await data.json();
    if (parseData.status === "ok") {
      this.setState({
        article: parseData.articles,
        totalResut: parseData.totalResults,
        loading: false,
      });
    } else {
      this.setState({ loading: false, message: parseData.message });
    }
  }
  async componentDidMount() {
    this.newsfetch();
  }

  prehandler = async () => {
    document.getElementById("pre").setAttribute("disabled", "true");
    await this.setState({ page: this.state.page - 1 });
    this.newsfetch();
    document.getElementById("pre").removeAttribute("disabled");
  };
  nexthandler = async () => {
    document.getElementById("next").setAttribute("disabled", "true");
    await this.setState({ page: this.state.page + 1 });
    this.newsfetch();
    document.getElementById("next").removeAttribute("disabled");
  };
  render() {
    return (
      <div className="container my-4">
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
                  />
                </div>
              );
            })}

        </div>
        <div className="container d-flex justify-content-evenly my-3">
          <button
            id="pre"
            disabled={this.state.page === 1}
            className="btn btn-primary"
            onClick={this.prehandler}
          >
            &larr; Previous
          </button>
          <p>
            {Math.ceil(this.state.totalResut / this.state.pageSize) >
              this.state.page
              ? this.state.page * this.state.pageSize - this.state.pageSize + 1
              : this.state.totalResut +
              1 -
              (this.state.totalResut % this.state.pageSize)}
            -
            {Math.ceil(this.state.totalResut / this.state.pageSize) >
              this.state.page
              ? this.state.pageSize * this.state.page
              : this.state.totalResut}{" "}
            out of {this.state.totalResut}
          </p>
          <button
            id="next"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResut / this.state.pageSize)
            }
            className="btn btn-primary"
            onClick={this.nexthandler}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
