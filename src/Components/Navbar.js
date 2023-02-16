import React from "react";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/news-app">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/business">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/entertainment">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news-app/technology">Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;