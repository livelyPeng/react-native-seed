/**
 * desc：  首页轮播
 * author：pl
 * date：  2020/2/24 12:54
 */
import React, {PureComponent} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
import { FlexAlignType } from '../../../types'
import { Image } from '../../../components'
import { wPx2P, hPx2P, WINDOW_WIDTH } from '../../../styleSheet/AdapterUtil'
import * as constant from '../../../styleSheet/constant'

export interface Props {
    topImage: {
        width: number,
        height: number,
        borderRadius?: number,
        alignSelf?: 'auto' | FlexAlignType;
    }
}
export interface State {
    entries: any[]
}
export default class SwiperCom extends PureComponent<Props, State> {

    static defaultProps = {
        topImage: {
            width: wPx2P(700),
            height: hPx2P(240),
            borderRadius: 8,
            alignSelf: 'center',
        }
    };

    constructor(props:Props) {
        super(props);
        this.state = {
            entries: [
                { image:  require('../../../assets/adv1.jpg')},
                { image: require('../../../assets/adv2.jpg') }
             ]
         }
    }
    onPressBanner = (item: any): void => {
        console.log(item)
    }
    render() {
        const { topImage } = this.props
        const { entries } = this.state
        return (
            <View style={{ height: hPx2P(240), width: WINDOW_WIDTH  }}>
                <Swiper
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    autoplay
                    activeDotColor={constant.themeColor}
                    paginationStyle={{ top: 110 }}
                    autoplayTimeout={3}
                >
                    {
                        entries.map((item, index) =>{
                            return  (
                                <TouchableHighlight
                                    key={index}
                                    onPress={() => this .onPressBanner(item)}>
                                    <Image style={this.props.topImage} source={item.image} />
                                </TouchableHighlight>
                            )
                        })
                    }
                </Swiper>
            </View>
        );
    }
}

// 样式表
const styles = StyleSheet.create({});
