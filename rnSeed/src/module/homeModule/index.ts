import router from './routers' // 模块的路由
import {RouterModule} from '../../types'
export const homeModule:RouterModule = {
    name: 'homeModule', // 模块名必填
    router
}
