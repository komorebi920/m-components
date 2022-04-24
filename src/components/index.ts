import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseCity from './chooseCity'
import chooseDate from './chooseDate'
import chooseIcon from './chooseIcon'
import chooseTime from './chooseTime'
import form from './form'
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
  chooseTime,
  chooseDate,
  chooseCity,
  form,
]

export default {
  install(app: App) {
    components.map((component) => app.use(component))
  },
}
