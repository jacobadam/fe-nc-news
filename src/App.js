import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/pages/Homepage";
import Header from "./components/pages/FunctionalComponents/Header";
import Articles from "./components/pages/ArticlesComponents/Articles";
import TopicPage from "./components/pages/TopicsComponents/TopicsPage";
import Users from "./components/pages/UsersComponents/Users";
import SingleArticle from "./components/pages/ArticlesComponents/SingleArticle";
import CommentPage from "./components/pages/CommentsComponents/CommentPage";
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    username: ""
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <Router>
          <Homepage username={username} path="/" />
          <Articles username={username} path="/articles" />
          <Articles path="/topics/:topic" />
          <TopicPage path="/topics" />
          <SingleArticle username={username} path="/articles/:article_id" />
          <Users path="/users/:username" />
          <CommentPage
            username={username}
            path="/articles/:article_id/comments"
          />
        </Router>
      </div>
    );
  }
  handleUserChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };
}
export default App;
