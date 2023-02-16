import React, {useState,useEffect} from "react";
import NewsItems from "./NewsItems";
import PropTypes  from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {    

    const[articles,setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const getNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    }

    useEffect(() => {
        getNews();
    },[])

    const fetchData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        
    }

    // Code for Pagination

    // const handlePreviousClick = async () => {
    //     window.scrollTo(0,0);
    //     setPage(page-1);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&$category=${props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();

    //     setArticles(parsedData.articles);
    //     
    // }

    // const handleNextClick = async () => {
    //     window.scrollTo(0, 0);
    //     if (page + 1 > Math.ceil(totalResults/12)){

    //     }
    //     else{
    //         setPage(page+1);
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&${props.category}&apiKey=2af6c5a4105342d5b209b56b7e642081&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         setArticles(parsedData.articles);
    //     }
        
    // }

    return (
        <div className="container mt-2">
            <h2>Headlines!</h2>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length !== totalResults}
                loader={<h4>Loading...</h4>}>

                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif"} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
                
            </InfiniteScroll>
                
                

                    {/* IMPLEMENTED PAGINATION */}

            {/* <div className="d-flex justify-content-between mt-3">
                <button type="button" disabled={page<=1} onClick={handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil(totalResults / 12)} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div> */}
            
            
        </div>
    )

}

News.defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 12
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News;