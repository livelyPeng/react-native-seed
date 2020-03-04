/**
 * desc：  mineIndex
 * author：pl
 * date：  2020/2/22 19:40
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";
import style from '../../../styleSheet'
import {StyleSheet, View, Text} from 'react-native';

export default class mineIndex extends Component {

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
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {
    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {
    }

    render() {
        return (
            <View style={[style.pagesBox]}>
               <Text>我的页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
