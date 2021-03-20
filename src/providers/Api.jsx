import * as axios from "axios";

const url = "https://private-5e3134-ethinkers.apiary-mock.com";

export const get = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}${endpoint}${params ? params : ""}`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      })
  })
}