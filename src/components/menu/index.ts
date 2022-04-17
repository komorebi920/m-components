import { App } from 'vue'
import menu from './src/index.vue'
import infinityMenu from './src/menu'

// 导出当前组件，实现通过 app.use() 方法按需加载当前组件
export default {
  install(app: App) {
    app.component('m-menu', menu)
    app.component('m-infinity-menu', infinityMenu)
  },
}
