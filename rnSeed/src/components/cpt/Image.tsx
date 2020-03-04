/**
 * desc：  FastImage是Image解决这些问题的替代产品
 * author：pl
 * date：  2020/2/29 20:43
 */
import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet, ViewProps, FlexStyle } from 'react-native';
import FastImage, { FastImageProperties } from 'react-native-fast-image';
export interface Props extends FastImageProperties, ViewProps{
    style: FlexStyle,
    onPress?: () => void,
    source: any
}
export default class ImageOrFastImage extends PureComponent<Props> {
    static defaultProps = {
        resizeMode: 'cover',
    }
    constructor(props: Props) {
        super(props);
        this.state = {}
    }
    onError = () => {
    }
    render() {
        const { source, style, resizeMode, onPress, hitSlop } = this.props;
        if (!source || (source.constructor === Object && typeof source.uri !== 'string')) { return <View style={style} />; }
        if (onPress) {
            return (
                <TouchableOpacity
                    onPress={onPress}
                    style={style}
                    hitSlop={hitSlop || {
                        top: 20, right: 20, left: 20, bottom: 20,
                    }}
                >
                    <FastImage
                        resizeMode={resizeMode}
                        style={{ width: style.width, height: style.height }}
                        source={source}
                        onError={this.onError}
                    />
                </TouchableOpacity>
            );
        }
        return (
            <FastImage
                resizeMode={resizeMode}
                style={style}
                source={source}
                onError={this.onError}
            />
        );
    }
}
// 样式表
const styles = StyleSheet.create({});
