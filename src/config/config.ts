import axios from 'axios';

const API_KEY:string = "";


export const HttpRequest = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {'token': API_KEY, "Content-Type": 'application/json'}
});
