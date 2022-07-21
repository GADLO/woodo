import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import store from './store'
import { Button } from 'vant'
import 'lib-flexible/flexible'
import 'vant/es/button/style'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(Button)
app.use(ElementPlus)

app.mount('#app')
