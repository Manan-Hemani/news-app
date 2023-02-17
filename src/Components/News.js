import React, {useState,useEffect} from "react";
import NewsItems from "./NewsItems";
import PropTypes  from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {    

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const getNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=12`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        getNews();
    },[])

    const fetchData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}ad&page=${page + 1}&pageSize=12`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
    }

    // Code for Pagination

    // const handlePreviousClick = async () => {
    //     window.scrollTo(0,0);
    //     setPage(page-1);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&$category=${props.category}&apiKey=${apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
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
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&${props.category}&apiKey=${apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         setArticles(parsedData.articles);
    //     }
        
    // }

    return (
        <>
            <div className="container mt-2">
                <h2>Headlines!</h2>

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<h1>Loading...</h1>}
                >

                    <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 50) : ""} imgUrl={element.urlToImage ? element.urlToImage :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU"} newsUrl={element.url} />

                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                    
                    

                        {/* IMPLEMENTED PAGINATION */}

                {/* <div className="d-flex justify-content-between mt-3">
                    <button type="button" disabled={page<=1} onClick={handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={page + 1 > Math.ceil(totalResults / 12)} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
                
                
            </div>
        </>
    )

}

News.defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
