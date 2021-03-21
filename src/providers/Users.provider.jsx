import * as provider from "./Api";

const endpoint = "/users";

class UsersProvider {
  getUsers () {
    return new Promise((resolve, reject) => {
      provider.get(endpoint)
        .then(resp => resolve(resp.data))
        .catch(error => reject(error))
    })
  }
}
export default UsersProvider;

