import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import GlobalStyle from "./globalStyles";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById("root")
);
