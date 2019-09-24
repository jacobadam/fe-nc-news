import React, { Component } from "react";

class Sorter extends Component {
  state = { sort_by: "created_at", order: "desc" };
  render() {
    return (
      <>
        <form className="sortContainer" onSubmit={this.handleSubmit}>
          <select className="dropdownButton" onChange={this.handleSortByChange}>
            <option value="created_at">Date Posted</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Total Votes</option>
          </select>
          <select className="dropdownButton" onChange={this.handleOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button className="button4">Sort!</button>
        </form>
      </>
    );
  }

  handleSortByChange = e => {
    this.setState({ sort_by: e.target.value });
  };

  handleOrderChange = e => {
    this.setState({ order: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { sort_by, order } = this.state;
    this.props.fetchAllArticles(sort_by, order);
  };
}

export default Sorter;
