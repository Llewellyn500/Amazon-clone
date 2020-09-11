import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:  'https://us-central1-e-clone-f33a0.cloudfunctions.net/api'
  //'http://localhost:5001/e-clone-f33a0/us-central1/api'
});

export default instance;