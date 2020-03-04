/**
 * 全局路由
 */
import React from 'react';
import {
    Text, View
} from 'react-native';
import * as constant from '../styleSheet/constant'

// 导航家
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
const Stack = createStackNavigator();

// 路由组件系统
import modules from '../module'
import BottomNavigator from './BottomNavigator'
// import { NodeChangeHOC } from '../components'

let sceneRootNoTab = [] // 我是root根页面但是我不是tab主页

// 集中路由
modules.forEach(({router})=> {
    // 我是root根页面但是我不是tab主页
    if (router.sceneRootNoTab) sceneRootNoTab = [...sceneRootNoTab, ...router.sceneRootNoTab]
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
