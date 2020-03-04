/**
 * desc： NodeChangeHOC高阶组件
 * author：pl
 * params: Type 页面类型 PackingComponent 页面组件
 * date：  2020/2/23 23:26
 */
import React, {PureComponent} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import * as constant from "../../styleSheet/constant";
export interface Props {
}

// HOC高阶组件
export default (type: string) => <T extends Props>(PackingComponent: React.ComponentType<T>) =>
    class HOC extends PureComponent<T> {
        constructor(props: T) {
            super(props);
            this.state = {}
        }
        render() {
            return (
                <View style={[styles.outerView]}>
                    <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'}/>
                    <PackingComponent {...this.props} statusBarPaddingTop={styles.statusBarPaddingTop}/>
                </View>
            );
        }
    }
// 样式表
const styles = StyleSheet.create({
    statusBarPaddingTop: {
        paddingTop: constant.STATUSBAR_HEIGHT
    },
    // 页面最顶级的样式
    outerView: {
        backgroundColor: constant.mainBackgroundColor,
        flex: 1
    }
});
