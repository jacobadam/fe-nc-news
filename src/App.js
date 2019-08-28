import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/pages/Homepage";
import Header from "./components/pages/Header";
import Articles from "./components/pages/ArticlesComponents/Articles";
import TopicPage from "./components/pages/TopicsComponents/TopicsPage";
import Users from "./components/pages/UsersComponents/Users";
import SingleArticle from "./components/pages/ArticlesComponents/SingleArticle"
import CommentPage from "./components/pages/CommentsComponents/CommentPage"

const App = () => {
  
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
