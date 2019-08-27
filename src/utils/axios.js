// import Vue from "vue"
import axios from "axios"
import qs from "qs"
import env from "./env"
// import urlAPI from "./newAPI"


// axios.defaults.baseURL = env.debug ? "http://192.168.10.58:8081/" : 'http://60.190.249.111:8899/';
// axios.defaults.baseURL = env.debug ? "http://192.168.10.58:8081/" : 'http://xcbwl.cn/';
// axios.defaults.baseURL = env.debug ? "http://answer.xcbwl.cn/" : 'http://xcbwl.cn/';
// axios.defaults.baseURL = urlAPI.baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// header: { '': 'application/x-www-form-urlencoded' },
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(env)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


// let publicData = {
//     pro_type: env.pro_type, //项目类型
//     // openid: getWXUserOpenId()
// }


function getWXUserOpenId() {
    if (localStorage.getItem("WXUserInfo")) {
        return JSON.parse(localStorage.getItem("WXUserInfo")).openId
    }
}




/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
* 封装post请求
* @param url
* @param data
* @returns {Promise}
*/

function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data,{
            headers:{
                referer: 'https://c.y.qq.com/',  //源域名
                host: 'c.y.qq.com'
            }
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
/**
* 封装request请求
* @param url
* @param method
* @param data
* @returns {function}
*/
function httpRequest(url, method, data) {
    let rdata = {...data }
    rdata = qs.stringify(rdata)
    if (method === "post") {
        return post(url, rdata)
    } else {
        return get(url, rdata)
    }
}

export default { get, post, httpRequest }




