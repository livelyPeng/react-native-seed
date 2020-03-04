/**
 * 常量
 */
import { Dimensions, Platform } from 'react-native';
import React from "react";
// 状态栏高度(机型不同状态栏高度不一样)
const isIphoneX = () => {
    if ([812, 896].includes(Dimensions.get('screen').height)) {
        return true;
    }
    return false;
};
const iOS = Platform.OS === 'ios';
const Android = Platform.OS === 'android';
const IS_IPHONE_X = isIphoneX();
export const STATUSBAR_HEIGHT = IS_IPHONE_X ? 40 : iOS ? 20 : 25;

/****************颜色****************/
export const themeColor = '#FE4543FF' // 主题色
export const miWhite = '#fff';
export const activeTabColor = '#999999'; // 没选中的tab颜色
export const inactiveTabColor = '#fe564fFF'; // 选中的tab颜色
export const mainBackgroundColor = miWhite; // 页面的背景底色
export const tabBackgroundColor = '#F7F7F7FF'; // tab底部背景色

/****************大小****************/
// header头部标题相关
export const headerHeight = 70; // header标题高度
export const headerMode = iOS ? 'float' : 'screen'; // 指定标题的呈现方式
export const headerTitleFontSize = 18 // 标题字体大小
export const screenOptions = {
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: {fontSize: headerTitleFontSize},
    headerStyle: {
        backgroundColor: themeColor,
        height: headerHeight
    },
}

// tabBar 高度
export const tabBarHeight = 50;
export const tabTextSize = 15;
