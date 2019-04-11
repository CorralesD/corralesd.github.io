import axios from "axios";

const apiEndpoint = "http://aws.random.cat/meow";

export function fetchRandomCat() {
  // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API

  return axios.get(apiEndpoint);
  // throw new Error("not implemented");
}
