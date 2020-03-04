/**
 * 常量
 */
import { Dimensions, Platform } from 'react-native';
import { StackNavigationOptions  } from '@react-navigation/stack';
import React from "react";

// 状态栏高度(机型不同状态栏高度不一样)
const isIphoneX:() => boolean = () => {
    if ([812, 896].includes(Dimensions.get('screen').height)) {
        return true;
    }
    return false;
};
const iOS:boolean = Platform.OS === 'ios';
const Android:boolean = Platform.OS === 'android';
const IS_IPHONE_X:boolean = isIphoneX();
export const STATUSBAR_HEIGHT:number = IS_IPHONE_X ? 40 : iOS ? 20 : 25;

/****************颜色****************/
export const themeColor:string = '#FE4543FF' // 主题色
export const miWhite:string = '#fff';
export const activeTabColor:string = '#999999'; // 没选中的tab颜色
export const inactiveTabColor:string = '#fe564fFF'; // 选中的tab颜色
export const mainBackgroundColor:string = miWhite; // 页面的背景底色
export const tabBackgroundColor:string = '#F7F7F7FF'; // tab底部背景色

/****************大小****************/
// header头部标题相关
export const headerHeight:number = 70; // header标题高度
export const headerMode:string = iOS ? 'float' : 'screen'; // 指定标题的呈现方式
export const headerTitleFontSize:number = 18 // 标题字体大小
export const screenOptions:StackNavigationOptions = {
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: {fontSize: headerTitleFontSize},
    headerStyle: {
        backgroundColor: themeColor,
        height: headerHeight
    },
}

// tabBar 高度
export const tabBarHeight:number = 50;
export const tabTextSize:number = 15;
