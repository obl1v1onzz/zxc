import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { FilmApp } from "./Components/FilmApp/FilmApp";
import { SearchResult } from "./Components/SearchResult/SearchResult";
import { Header } from "./Components/Header/Header";
import { useState } from "react";

let Main = () => {
  let [filmSearch, setSearchFilm] = useState();
  let searchCallback = (promise) => {
    promise().then((response) => {
      setSearchFilm(response.data);
    });
  };
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Header callback={searchCallback}></Header>
          <Switch>
            <Route path="/film/:id" component={FilmApp}></Route>
            <Route path="/search/:query">
              <SearchResult data={filmSearch}></SearchResult>
            </Route>
            <Route>
              <App></App>
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
      ,
    </div>
  );
};

ReactDOM.render(<Main></Main>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
