import axios from "axios";
const instance = axios.create({
    baseURL: 'https://us-central1-clone-144d5.cloudfunctions.net/api'
    // "http://127.0.0.1:5001/clone-144d5/us-central1/api"
})
export default instance;

