import axios from "axios";

const baseURL = "https://jacob-nc-news.herokuapp.com/api";

export const getArticles = ({ topic, sort_by, order }) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic, sort_by, order }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getSingleArticle = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getUser = username => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    const { user } = data;
    return user;
  });
};

export const getComments = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchVotes = (voteDifference, article_id, comment_id) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
    // seperate patch votes func or can i re use this one for /comments/:comment_id
    inc_votes: voteDifference
  });
};

export const postComment = (username, body, article_id) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: username,
      body: body
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`).then(({ data }) => {
    return data.comment;
  });
};
