import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import { kebabCase } from 'lodash'
import mUI from './components'

const app = createApp(App)

/**
 * 全局注册图标（牺牲一点性能）
 * el-icon-xxx
 */
for (let key in ElIcons) {
  const component = (ElIcons as any)[key]
  const name = `el-icon-${kebabCase(component.name)}`
  app.component(name, component)
}

app.use(router).use(ElementPlus).use(mUI).mount('#app')
