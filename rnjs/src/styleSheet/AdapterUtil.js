/**
 * 屏幕适配类
 */
"use strict"

import { Dimensions } from 'react-native'

//UI设计图的宽度
const designWidth = 750
//UI设计图的高度
const designHeight = 1334

//手机屏幕的宽度
export const WINDOW_WIDTH = Dimensions.get('window').width;
//手机屏幕的高度
export const WINDOW_HEIGHT = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = WINDOW_WIDTH / designWidth
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = WINDOW_HEIGHT / designHeight

export const wPx2P = function wPx2P(px) {
    return px * unitWidth;
};

export const hPx2P = function hPx2P(px) {
    return px * unitHeight;
};
