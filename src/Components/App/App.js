import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Edit from "../../Routes/Edit";
import Add from "../../Routes/Add";
// import { Query } from "react-apollo";
// import { GET_NOTES } from "./queries";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Notes} />
          <Route path={"/note/:id"} component={Note} />
          <Route path={"/edit/:id"} component={Edit} />
          <Route path={"/add"} component={Add} />
        </Switch>
      </BrowserRouter>
      // <div className="App">
      //   <Query query={GET_NOTES}>{() => null}</Query>
      // </div>
    );
  }
}

export default App;
