import Vue from 'vue';

var vm = new Vue({});    //获取vue实例
import { Loading } from 'element-ui';

let loading = null

// 当前正在进行的请求数量
let currentRequests = 0

// 关闭loading
function loadingclose () {
  // 当前请求数量 <= 0 时， 关闭loading
  if (currentRequests <= 0) {
    currentRequests = 0
    if (loading != null) {
      loading.close()
      loading = null
    }
  }
}



export default function (app) {
  let axios = app.$axios; // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    if (config && config.progress === false && process.browser) {
      return
    }
    console.log(process.browser)
    if (process.browser) {    //判断是否为客户端（必须）
      currentRequests++
      if (!loading) {
        loading = Loading.service()
      }
      config.headers.token = 'woshitoken'
    }
  })

  // 返回回调
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return
    }
    if (process.browser) {    //判断是否为客户端（必须）
      if(response.status == '200') {

      }
      // let loadingInstance = Loading.service();
      // vm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      currentRequests--
      loadingclose();
      // });
    }

  })

  // 错误回调
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return
    }
    currentRequests--
    loadingclose();
  })

}
