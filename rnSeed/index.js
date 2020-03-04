/**
 * 入口文件
 */
// 注意：（踩坑日记1天）如果你吧下面一行代码删除，即使您的应用程序在开发中运行良好，它也会在生产中崩溃。
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
// 勿删下面二行（踩坑日记1天）
import { enableScreens } from 'react-native-screens';
enableScreens();

console.log('author: Penglei, 博客站www.plblog.cn， reactNative种子; 种子采用模块化，使用前认真看下整体框架')

AppRegistry.registerComponent(appName, () => App);
