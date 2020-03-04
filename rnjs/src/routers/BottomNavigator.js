/**
 * 底部tab导航管理中心
 */
import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import * as constant from '../styleSheet/constant'
import Icon from 'react-native-vector-icons/Ionicons'

import { CustomDrawerContent } from '../components'
import modules from '../module'

//  路由海航家
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const  Authorization = true // 使用有权限
// 这里判断是否有权限来显示对应的tab
const getRoutes = () => {
    const data = Authorization ? ['homeModule', 'mineModule'] : ['homeModule']
    const isExistArr = (arr1, arr2, new_arr = []) => {
        arr1.forEach(({router, name}) => {
            if (arr2.indexOf(name) !== -1 && router.sceneRootTab) {
                new_arr = [...new_arr, ...router.sceneRootTab]
            }
        })
        return new_arr;
    }
    return isExistArr(modules, data)
};

// 自定义导航样式
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={[{ flexDirection: 'row' }, styles.myTabBar]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <View style={styles.tabView} key={index}>
                         <TouchableOpacity
                                activeOpacity={isFocused ? 1 : 0.5}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                style={styles.tabItem}
                            >
                                <Icon name={options.Icon || ''}
                                      size={25}
                                      color={isFocused ? constant.inactiveTabColor : constant.activeTabColor}/>
                                <Text style={[{ color: isFocused ? constant.inactiveTabColor : constant.activeTabColor }, styles.tabText]}>
                                    {label}
                                </Text>
                         </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
}

// tab
function DrawerCom() {
    return(
        // tabBar 返回React元素以显示为选项卡栏的函数
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            { getRoutes() }
        </Tab.Navigator>
    )
}

export default class TabPage extends Component{
    render () {
        return (
            // 抽屉
            <Drawer.Navigator
                drawerContent={props => <CustomDrawerContent {...props} />}
                drawerStyle={{width:300}}
            >
                <Drawer.Screen name="tabBar" component={DrawerCom}/>
            </Drawer.Navigator>
        );
    }
}
// 样式表
const styles = StyleSheet.create({
    myTabBar: {
      backgroundColor: constant.tabBackgroundColor
    },
    tabText: {
        fontSize: constant.tabTextSize
    },
    tabView: {
        flex: 1,
        alignItems: 'center',
        height: constant.tabBarHeight
    },
    tabItem: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})
