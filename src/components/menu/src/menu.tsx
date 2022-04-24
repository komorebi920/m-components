import { defineComponent, PropType, useAttrs } from 'vue'
import * as Icons from '@element-plus/icons'
import { MenuItem } from './types'

const iconStyle = {
  marginRight: 4,
  width: '1em',
  height: '1em',
}

const component = defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<any[]>,
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
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name',
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index',
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon',
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children',
    },
  },
  setup(props, ctx) {
    return () => {
      const attrs = useAttrs()

      // 封装一个渲染无限层级菜单的方法
      // 函数会返回一段 JSX 代码
      const renderMenu = (data: MenuItem[]) => {
        return data.map((item: any) => {
          // 每个菜单的图标
          item.i = (Icons as any)[item[props.icon]!]

          // 处理 sub-menu 的插槽
          const slots = {
            title: () => {
              return (
                <>
                  <item.i style={iconStyle} />
                  <span>{item[props.name]}</span>
                </>
              )
            },
          }

          // 递归渲染 children 子菜单
          if (item[props.children] && item[props.children].length) {
            return (
              <el-sub-menu index={item[props.index]} v-slots={slots}>
                {renderMenu(item[props.children])}
              </el-sub-menu>
            )
          }

          // 正常渲染普通菜单
          return (
            <el-menu-item index={item[props.index]}>
              <item.i style={iconStyle} />
              <span>{item[props.name]}</span>
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
