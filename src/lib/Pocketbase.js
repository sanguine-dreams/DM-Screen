import axios from "axios";

const db = new axios.create({
    baseURL:"http://127.0.0.1:8090/api"
})


export default db
