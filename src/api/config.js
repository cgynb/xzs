import axios from 'axios';
import { useCommonStore } from '@/store/common';
const store = useCommonStore();

axios.defaults.baseURL = 'http://81.71.138.10:8080';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const request = axios.create({});

// request hook
request.interceptors.request.use(req => {
    req.headers.token = store.token;
    return req;
}, err => {
    console.log('req err', err);
    return Promise.reject(err);
});

// response hook
request.interceptors.response.use(resp => {
    try{
        if(resp.data.data.token != undefined){
            store.token = resp.data.data.token;
            store.role = resp.data.data.role;
        }
    }catch(err){}
    try{
        if(resp.headers.token != undefined){
            store.token = resp.headers.token;
        }
    }catch(err){}
    return resp;
}, err => {
    console.log("resp err", err);
    return Promise.reject(err);
});

export default request;
