/**
 * desc：  登录页面
 * author：pl
 * date：  2020/2/24 12:49
 */
import React, {PureComponent} from 'react';
import {StyleSheet, View,} from 'react-native';

export interface PropTypes {
}
export default class LoginIndex extends PureComponent<PropTypes> {

    static defaultProps = {};

    static propTypes = {};

    constructor(props: PropTypes) {
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
            <View>

            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({});
