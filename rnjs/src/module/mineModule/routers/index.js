/**
 * 当前模块路由
 */
import React from 'react';

// 导航组
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { createStackNavigator  } from '@react-navigation/stack';
const Stack = createStackNavigator();

// 组件
import mineIndex from '../viewPage/mineIndex'
import { NodeChangeHOC } from "../../../components";


// 我是root根页面且我是tab主页
const sceneRootTab = [
    <Tab.Screen name="mineIndex"
                component={NodeChangeHOC('tabNav')(mineIndex)}
                options={{Icon: 'md-person', tabBarLabel: '我的'}}
                key="mineIndex"/>
]

// 我是root根页面但是我不是tab主页
const sceneRootNoTab = []

export default {
    sceneRootTab,
    sceneRootNoTab
}
