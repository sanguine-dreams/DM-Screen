import axios from "axios";

const api = new axios.create({
    baseURL:"https://api.open5e.com/v1"
})


export {api} 