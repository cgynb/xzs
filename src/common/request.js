/*
request

const get_xx = () => {}
*/
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/2596168-0-default';
axios.defaults.timeout = 5000;

const request = axios.create({});

request.interceptors.request.use(req => {
    console.log("req", req);
    /*
    bind token to header
    */
    return req;
}, err => {
    console.log('resp err', err);
    return Promise.reject(err);
})

request.interceptors.response.use(resp => {
    console.log("resp", resp);
    /*
    get new token from header
    */
    return resp;
}, err => {
    console.log("resp err", err);
    return Promise.reject(err);
})

export default request
