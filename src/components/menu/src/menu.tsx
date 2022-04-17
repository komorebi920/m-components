import { defineComponent, PropType, useAttrs } from 'vue'
import { kebabCase } from 'lodash'
import { MenuItem } from './types'

const component = defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: '',
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    return () => {
      const attrs = useAttrs()

      // 封装一个渲染无限层级菜单的方法
      // 函数会返回一段 JSX 代码
      const renderMenu = (data: MenuItem[]) => {
        return data.map((item: MenuItem) => {
          // 每个菜单的图标
          item.i = `el-icon-${kebabCase(item.icon)}`

          // 处理 sub-menu 的插槽
          const slots = {
            title: () => {
              return (
                <>
                  <item.i />
                  <span>{item.name}</span>
                </>
              )
            },
          }

          // 递归渲染 children 子菜单
          if (item.children && item.children.length) {
            return (
              <el-sub-menu index={item.index} v-slots={slots}>
                {renderMenu(item.children)}
              </el-sub-menu>
            )
          }

          // 正常渲染普通菜单
          return (
            <el-menu-item index={item.index}>
              <item.i />
              <span>{item.name}</span>
            </el-menu-item>
          )
        })
      }

      return (
        <el-menu
          defaultActive={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})

export default component
