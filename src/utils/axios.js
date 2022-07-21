import axios from 'axios'
import { Toast } from 'vant'

// 项目的请求地址为 47.99.134.126:28019/api/v1 且开发环境和生产环境都用一套，这里就不作区分了
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
// 跨域请求是要不要携带cookie，本课程没有跨域请求的情况
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 判断用户登录状态是通过 token 来实现
axios.defaults.headers.token = localStorage.getItem('token') || ''
// post 请求时，发送 json 形式的数据包
axios.defaults.headers.post['Content-Type'] = 'application/json'
// interceptors 是拦截器，每个请求都会经过这个拦截器，返回的数据可以通过拦截处理后返回
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.resultCode === 416) {
      // 返回 416 代表没有登录状态，路由跳转到/login 页面（目前还为创建组件），这里的 window.vRouter 是在
      // main.js 里面设置好的 window.vRouter = router
      window.vRouter.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
