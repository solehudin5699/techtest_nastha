import axios from "axios";

export const addEvent = (body) => {
  return axios.post(`http://localhost:1000/event`, body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const getEvent = (title, page) => {
  return axios.get(
    `http://localhost:1000/event?title=${title}&orderBy=DESC&limit=5&page=${page}`
  );
};
