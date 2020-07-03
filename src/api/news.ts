import axios from "axios";

export const getIdsOfTopStories = () =>
  axios({
    url: `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
    method: "get",
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });

export const getStoryById = (id: string) =>
  axios({
    url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    method: "get",
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
