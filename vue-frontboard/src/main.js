import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.css'
import axios from 'axios'
import store from './vuex/store'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
//Promise API를 활용하는 HTTP 비동기 통신 라이브러리
//전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있다
app.config.globalProperties.$serverUrl = '//localhost:8081'
app.config.globalProperties.$store = store
app.use(router).use(store).mount('#app')