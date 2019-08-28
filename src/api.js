import axios from "axios";

const baseURL = "https://jacob-nc-news.herokuapp.com/api";

export const getArticles = topic => {
  // const queryParams = { topic, sort_by }
  // console.log(queryParams)
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic }
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
      const { comments } = data;
      return comments;
    });
};

export const patchVotes = (voteDifference, article_id) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: voteDifference
  });
};
