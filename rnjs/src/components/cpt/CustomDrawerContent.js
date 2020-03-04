/**
 * desc：  侧滑菜单
 * author：pl
 * date：  2020/2/26 20:57
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from 'react-native';

export default class CustomDrawerContent extends Component {

    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {
    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {
    }

    render() {
        return (
            <View style={ styles.drawer }>
                <Text style={{ fontSize: 20 }}>我是侧滑菜单</Text>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
