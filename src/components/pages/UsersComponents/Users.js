import React, { Component } from "react";
import * as api from "../../../api";
import UsernameCard from "./UsernameCard";
import Spinner from "../FunctionalComponents/LoadingPage";
import ErrorPage from "../FunctionalComponents/ErrorPage";

class Users extends Component {
  state = {
    isLoading: true,
    users: null,
    error: null
  };

  render() {
    const { isLoading, users, error } = this.state;

    if (isLoading) return <Spinner />;
    if (error) return <ErrorPage error={error} />;

    return (
      <div>
        <main className="userContainer">
          <h4 className="userHeader">User Details</h4>
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
    api
      .getUser(username)
      .then(users => {
        this.setState({ users, isLoading: false });
      })
      .catch(err => {
        this.setState({
          error: {
            msg: "User does not exist!",
            status: err.response.status
          },
          isLoading: false
        });
      });
  }
}

export default Users;
