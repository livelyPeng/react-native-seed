import router from './routers' // 模块的路由
import {RouterModule} from '../../types'
export const mineModule:RouterModule = {
    name: 'mineModule', // 模块名必填
    router
}
