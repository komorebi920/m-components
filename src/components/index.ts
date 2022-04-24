import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import list from './list'
import menu from './menu'
import notification from './notification'
import progress from './progress'
import trend from './trend'

// 导出所有组件，实现通过 app.use() 方法加载所有组件
const components = [
  chooseArea,
  chooseIcon,
  list,
  menu,
  notification,
  trend,
  progress,
]

export default {
  install(app: App) {
    components.map((component) => app.use(component))
  },
}
