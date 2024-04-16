import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 9000,
});

//Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 100) {
      console.log("Continue!");
    } else if (error.response.status === 101) {
      console.log("Switching Protocols");
    } else if (error.response.status === 200) {
      console.log("Success!");
    } else if (error.response.status === 201) {
      console.log("Created!");
    } else if (error.response.status === 204) {
      console.log("No Content!");
    } else if (error.response.status === 300) {
      console.log("Multiple Choices!");
    } else if (error.response.status === 301) {
      console.log("Moved Permanently!");
    } else if (error.response.status === 302) {
      console.log("Found!");
    } else if (error.response.status === 304) {
      console.log("Not Modified!");
    } else if (error.response.status === 400) {
      console.log("Bad Request!");
    } else if (error.response.status === 401) {
      console.log("unauthorized!");
    } else if (error.response.status === 403) {
      console.log("Forbidden!");
    } else if (error.response.status === 404) {
      console.log("Not Found!");
    } else if (error.response.status === 405) {
      console.log("Method Not Allowed!");
    } else if (error.response.status === 409) {
      console.log("Conflict!");
    } else if (error.response.status === 500) {
      console.log("Internal Server Error!");
    } else if (error.response.status === 501) {
      console.log("Not Implemented!");
    } else if (error.response.status === 502) {
      console.log("Bad Gateway!");
    } else if (error.response.status === 503) {
      console.log("Service Unavailable!");
    } else if (error.response.status === 504) {
      console.log("Gateway Timeout!");
    } else {
      console.log("Call 911");
    }
  },
);
