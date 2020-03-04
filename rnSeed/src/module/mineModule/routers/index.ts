/**
 * 当前模块路由
 */
import { RouterScene } from '../../../types'

// 组件
import mineIndex from '../viewPage/mineIndex'

/**
 *  type = 'tabNav' 代表我是底部tab导航 || type = 'stackPage'  代表我不是底部tab导航，而是页面
 *  name = '’ name属性确保唯一，页面跳转的标识
 *  component = ''  页面组件
 *  options: {Icon: 'md-home', tabBarLabel: '首页'} （不是tab不需要写）options中Icon属性代表tab图标, tabBarLabel 表示tab文字
 */
const SceneRootRouter: Array<RouterScene> = [
    {
        type: 'tabNav',
        name: 'mineIndex',
        component: mineIndex,
        options: {Icon: 'md-person', tabBarLabel: '我的'}
    }
]

export default SceneRootRouter
