/**
 * 全局路由
 */
import React from 'react';
import {
    Text, View
} from 'react-native';
import * as constant from '../styleSheet/constant'
import { NodeChangeHOC } from "../components"
import { forHorizontalIOS } from '../utils/animation'

// 导航家
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
const Stack = createStackNavigator();

// 路由组件系统
import modules from '../module'
import BottomNavigator from './BottomNavigator'

let sceneRootNoTab: Array<JSX.Element> = [] // 我是root根页面但是我不是tab主页

// 集中不是tab主页的路由
modules.forEach(({router})=> {
    // 我是root根页面但是我不是tab主页
    if (router && router.length) {
        // 找出不是tab主页的路由组件并返回导航家数组
        sceneRootNoTab = [...sceneRootNoTab, ...router.filter(items=> items.type === 'stackPage').map(item =>
            <Stack.Screen name={item.name}
                          key={item.name}
                          options={forHorizontalIOS}
                          component={NodeChangeHOC('stackPage')(item.component)} />
        )]
    }
})

const getRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"TabPage"}
                mode={'card'}
                headerMode={'screen'}
                screenOptions={constant.screenOptions}
            >
                {/*我是root根页面且我是tab主页*/}
                <Stack.Screen name="TabPage"
                              options={{headerShown: false}}
                              component={BottomNavigator} />
                {/*我是root根页面但是我不是tab主页*/}
                { sceneRootNoTab }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default getRouter
