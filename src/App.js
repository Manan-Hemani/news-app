import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const App = () => {
return(
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/news-app"><News country="in" category="general" pageSize={12} key="general" /></Route>
        <Route exact path="/news-app/business"><News country="in" category="business" pageSize={12} key="business" /></Route>
        <Route exact path="/news-app/entertainment"><News country="in" category="entertainment" pageSize={12} key="entertainment" /></Route>
        <Route exact path="/news-app/health"><News country="in" category="health" pageSize={12} key="health" /></Route>
        <Route exact path="/news-app/science"><News country="in" category="science" pageSize={12} key="science" /></Route>
        <Route exact path="/news-app/sports"><News country="in" category="sports" pageSize={12} key="sports" /></Route>
        <Route exact path="/news-app/technology"><News country="in" category="technology" pageSize={12} key="technology" /></Route>
      </Switch>

    </Router>
  </div>
    
  )
}

export default App;