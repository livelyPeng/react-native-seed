/**
 * desc：  homeIndex
 * author：pl
 * date：  2020/2/22 13:18
 */
import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import styleSheet from '../../../styleSheet'
import SwiperCom from '../privateComponents/SwiperCom'
import * as constant from '../../../styleSheet/constant'
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class homeIndex extends PureComponent {

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
        // this.props.statusBarPaddingTop(他是状态栏的高度)每个页面只要经过NodeChangeHOC处理，都会有这个属性
        return (
            <View style={styleSheet.pagesBox}>
                {/*头部*/}
                <View style={[styles.headerBox, this.props.statusBarPaddingTop]}>
                    <View style={styles.searchBox}>
                        <View style={styles.falseSearch}>
                            <Text style={styles.textTitle}>请输入搜索内容</Text>
                        </View>
                        <View style={styles.newsBox}>
                            <View>
                                <View style={styles.iconBox}>
                                    <Icon name="md-notifications" size={20} color={"#fff"}/>
                                </View>
                                <Text style={styles.newsText}>消息</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/*轮播*/}
                <View style={[styleSheet.paddingTB10]}>
                    <SwiperCom/>
                </View>
               <Text>我是首页</Text>
                <View style={styles.marginTopBtn}>
                    <Button
                        title="去到Home子页面"
                        onPress={() => this.props.navigation.navigate('HomeSubPage')}
                    />
                </View>
                <View style={styles.marginTopBtn}>
                    <Button title={'打开侧滑菜单'}
                            onPress={() => this.props.navigation.openDrawer()}/>
                </View>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: constant.themeColor
    },
    searchBox: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 13,
      paddingLeft: 13,
      flexDirection: 'row'
    },
    newsText: {color: '#fff', fontSize: 12},
    iconBox: {marginTop: -3, marginLeft: 5,},
    newsBox: {
      width: 40,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    textTitle: {color: '#B3B3B3FF', fontSize: 13},
    falseSearch: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        height: 33,
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 5
    },
    marginTopBtn: {
        marginTop: 30,
        paddingLeft: 50,
        paddingRight: 50
    }
});
