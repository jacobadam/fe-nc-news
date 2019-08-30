import React, { Component } from "react";
import * as api from "../../../api";
import UsernameCard from "./UsernameCard";
import LoadingPage from "../FunctionalComponents/LoadingPage";

class Users extends Component {
  state = {
    isLoading: true,
    users: null,
    error: null
  };

  render() {
    const { isLoading, users, error } = this.state;

    if (isLoading) return <LoadingPage />;
    if (error) return <p>Error!!!</p>;

    return (
      <div>
        <main className="userContainer">
          <h1>User Details</h1>
          <UsernameCard {...users} key={users.username} />
        </main>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    const { username } = this.props;
    api.getUser(username).then(users => {
      this.setState({ users, isLoading: false });
    });
  }
}

export default Users;
