import axios from "axios";

export default axios.create({
  baseURL: "https://imdb-api.com/en/API",
});

/* Here we can setup different interceptors to work with the Request and Response */
