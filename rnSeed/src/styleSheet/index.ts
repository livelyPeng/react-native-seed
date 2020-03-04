/**
 * 公用样式表
 */

import {StyleSheet} from "react-native";
import * as constant from "./constant"

export default StyleSheet.create({
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
