import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElementPlus, { locale }).use(router).mount('#app')