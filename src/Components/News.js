import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes  from "prop-types";

export default class News extends Component {
    

    static defaultProps={
        country:'in',
        category:'general',
        pageSize:12
    }

    static propTypes = {
        country:PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults:0
        }
    }

    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        });
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&$category=${this.props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ page: this.state.page - 1, articles: parsedData.articles });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/12)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ page: this.state.page + 1, articles: parsedData.articles,});
        }
        
    }

    render() {
        return (
            <div className="container mt-2">
                <h2>Headlines!</h2>

                <div className="row">
                    {this.state.articles.map((element)=>{
                        return(
                            <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage ? element.urlToImage :"https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif"} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
                
                
            </div>
        )
    }
}