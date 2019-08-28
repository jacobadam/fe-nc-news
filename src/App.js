import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/pages/Homepage";
import Header from "./components/pages/Header";
import Articles from "./components/pages/Articles";
import TopicPage from "./components/pages/TopicsPage";
import Users from "./components/pages/Users";
import SingleArticle from "./components/pages/SingleArticle";
import CommentPage from "./components/pages/CommentPage"

const App = () => {
  //user needs to be set in state

  
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <Articles path="/articles" />
        <Articles path="/topics/:topic" />
        <TopicPage path="/topics" />
        <SingleArticle path="/articles/:article_id" />
        <Users path="/users/:username" />
        <CommentPage path="/articles/:article_id/comments"/>
      </Router>
    </div>
  );
};

export default App;
