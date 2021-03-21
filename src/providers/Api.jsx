import * as axios from "axios";

const url = "https://private-a58dd5-useraddlist.apiary-mock.com/";

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
