import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import notification from './notification'
import trend from './trend'

// 导出所有组件，实现通过 app.use() 方法加载所有组件
const components = [chooseArea, chooseIcon, trend, notification]
export default {
  install(app: App) {
    components.map((component) => app.use(component))
  },
}
