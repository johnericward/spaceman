import React, { Component } from 'react';
import World from "./features/world"
import Intro from "./features/intro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
 // state = {  }
 render() {
   return (
     <Router>
       <div>
       <Switch>
         <Route exact path="/" component={Intro} />
         <Route exact path="/space" component={World} />
       </Switch>
       </div>
     </Router>
   );
 }
}
export default App;