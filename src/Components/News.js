import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
    render() {
        return (
            <div className="container mt-2">
                <h2>Headlines!</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItems title="myTitle" description="WECJSDNKX" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="myTitle" description="WECJSDNKX" />
                    </div>
                    <div className="col-md-4">
                        <NewsItems title="myTitle" description="WECJSDNKX" />
                    </div>
                </div>
                
            </div>
        )
    }
}