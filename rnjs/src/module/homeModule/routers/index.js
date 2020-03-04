/**
 * 当前模块路由
 */
import React from 'react';

// 导航组
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import { bevelAngle } from '../../../utils/animation'

// 组件
import homeIndex from '../viewPage/homeIndex'
import HomeSubPage from '../viewPage/HomeSubPage'
import { NodeChangeHOC } from "../../../components";

// 我是root根页面且我是tab主页
const sceneRootTab = [
    //  如果你是tab主页: options中Icon属性代表图标
    // name属性确保唯一
    // 如果你是一个页面类型的组件，那么你可能需要用NodeChangeHOC包装下
    <Tab.Screen name="homeIndex"
                key="homeIndex"
                options={{Icon: 'md-home', tabBarLabel: '首页'}}
                component={NodeChangeHOC('tabNav')(homeIndex)} />
]

// 我是root根页面但是我不是tab主页
const sceneRootNoTab = [
    // name属性确保唯一
    // 如果你是一个页面类型的组件，那么你可能需要用NodeChangeHOC包装下
    <Stack.Screen name="HomeSubPage"
                  key={'HomeSubPage'}
                  component={NodeChangeHOC('stackNav')(HomeSubPage)}
                  options={{
                      ...bevelAngle
                  }}
    />
]

export default {
    sceneRootTab,
    sceneRootNoTab
}
