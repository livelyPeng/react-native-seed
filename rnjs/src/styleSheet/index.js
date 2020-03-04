/**
 * 公用样式表
 */

import {StyleSheet, Platform, StatusBar} from "react-native";
import * as constant from "./constant"
export const navBarHeight = (Platform.OS === 'ios') ? constant.iosnavHeaderHeight : constant.andrnavHeaderHeight;

export default StyleSheet.create({
    routerStyle: {
        //设置router的样式
        flex: 1,
        backgroundColor: constant.mainBackgroundColor,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    },
    navigationBar: {
        backgroundColor: constant.primaryColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight,
    },
    // 页面样式
    pagesBox: {
        backgroundColor: constant.mainBackgroundColor,
        flex: 1
    },
    flexStyle: {
        flex: 1,
    },
    flexDirectionRow: {
        flexDirection: 'row',
        flex: 1,
    },
    flexDirectionColumn: {
        flexDirection: "column",
        flex: 1,
    },
    flexDirectionRowNotFlex: {
        flexDirection: 'row',
    },
    flexDirectionColumnNotFlex: {
        flexDirection: "column",
    },
    justifyCenter: {
        justifyContent: "center"
    },
    centered: {
        justifyContent: "center",
        alignItems: "center"
    },
    centerV: {
        justifyContent: "center",
    },
    centerH: {
        alignItems: "center"
    },
    justifyBetween: {
        justifyContent: "space-between"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    paddingLR10: {
        paddingLeft: 10,
        paddingRight: 10
    },
    paddingTB10: {
        paddingBottom: 10,
        paddingTop: 10
    }
})
