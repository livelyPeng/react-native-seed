/**
 * desc：  首页列表
 * author：pl
 * date：  2020/3/3 22:19
 */
import React, {PureComponent} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableHighlight} from 'react-native';
import {PullToRefresh} from '../../../components'
import SwiperCom from './SwiperCom'
import { Image } from '../../../components'
import styleSheet from "../../../styleSheet";
import {hPx2P, wPx2P, WINDOW_WIDTH} from "../../../styleSheet/AdapterUtil";
import {FlexAlignType} from "../../../types";

export interface PropTypes {
    topImage: {
        width: number,
        height: number,
        borderRadius?: number,
        alignSelf?: 'auto' | FlexAlignType;
    }
}
export interface StateTypes {
    listData: any,
    image: any,
    goodsPng: any
}

export default class HomeList extends PureComponent<PropTypes, StateTypes> {

    static defaultProps = {
        topImage: {
            width: wPx2P(650),
            height: hPx2P(450),
            alignSelf: 'center',
        }
    };

    static propTypes = {};

    constructor(props: PropTypes) {
        super(props);
        this.state = {
            listData: {
                totalPages: 1,
                currentPage: 1,
                list: [{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]
            },
            image: require('../../../assets/adv3.png'),
            goodsPng: require('../../../assets/goods.png')
        }
    }
    componentDidMount() {
    }
    bannerLayout = () => {
         return (
             <View style={[styleSheet.paddingTB10]}>
                 <SwiperCom/>
                 <View style={{ paddingTop: 20 }}>
                   <Image style={this.props.topImage} source={this.state.image} />
                 </View>
             </View>
         )
    }
    loadMore = () => {
        this.fetchData();
    }
    fetchData = () => {

    }
    renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.listBox}>
                <View style={styles.items}>
                    <Image style={{ height: 150 }} source={this.state.goodsPng} />
                </View>
            </View>
        )
    }
    render() {
        const { listData } = this.state
        return (
            <PullToRefresh
                totalPages={listData.totalPages}
                currentPage={listData.currentPage}
                Wrapper={FlatList}
                ListHeaderComponent={this.bannerLayout}
                data={listData.list}
                numColumns={1}
                refresh={this.fetchData}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
            />
        );
    }
}

// 样式表
const styles = StyleSheet.create({
    listBox: {
        width: WINDOW_WIDTH,
        backgroundColor:'#F7F7F7FF',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    items: {
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        borderRadius: 7
    }
});
