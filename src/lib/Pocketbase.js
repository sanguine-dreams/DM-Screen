import axios from "axios";
import PocketBase from 'pocketbase';


const db = new axios.create({
    baseURL:"https://dm-screen.pockethost.io"
})


export default db
