import React, { Component } from "react";
import * as api from "../../../api";
import ErrorPage from "./ErrorPage";

class VotesUpdater extends Component {
  state = {
    newVoteCount: 0,
    error: null
  };

  render() {
    const { votes, username } = this.props;
    const { newVoteCount, error } = this.state;

    return (
      <>
        <p className="voteScore">Votes: {votes + newVoteCount}</p>
        {username && (
          <button
            className="button1"
            onClick={() => this.updateVotes(1)}
            disabled={newVoteCount === 1}
          >
            Upvote
          </button>
        )}
        {username && (
          <button
            className="button1"
            onClick={() => this.updateVotes(-1)}
            disabled={newVoteCount === -1}
          >
            Downvote
          </button>
        )}
        {error && <ErrorPage error={error} />}
      </>
    );
  }

  updateVotes = voteDifference => {
    const { article_id, comment_id } = this.props;
    this.setState(currentState => {
      return { newVoteCount: currentState.newVoteCount + voteDifference };
    });
    api.patchVotes(voteDifference, article_id, comment_id).catch(error => {
      console.log(comment_id, "comment ID in PATCH VOTES - VOTE UPDATOR");
      console.log(article_id, "article ID in PATCH VOTES - VOTE UPDATOR");
      this.setState(currentState => {
        return {
          newVoteCount: currentState.newVoteCount - voteDifference,
          error: { status: 500, msg: "Vote not registered at this time" }
        };
      });
    });
  };
}

export default VotesUpdater;
