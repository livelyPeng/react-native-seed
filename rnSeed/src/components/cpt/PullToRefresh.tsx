/**
 * desc：  上拉刷新下拉加载
 * author：pl
 * date：  2020/3/3 22:07
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    RefreshControl,
    Text} from 'react-native';

export interface PropTypes {
    totalPages: any
    currentPage: any
    renderNoItem?: any
    renderFooter?: any,
    Wrapper: any,
    refresh: any,
    ListHeaderComponent: any,
    data: any,
    numColumns: number,
    renderItem: any,
    onEndReached: any
}

export interface StateTypes {
    refreshing: boolean,
    lists: any
}

export default class PullToRefresh extends PureComponent<PropTypes, StateTypes> {

    static defaultProps = {
    };

    static propTypes = {};

    constructor(props: PropTypes) {
        super(props);
        this.state = {
            lists: null,
            refreshing: false
        }
    }
    componentDidMount() {
    }
    onRefresh = () => {
        this.setState({ refreshing: true });
    }
    renderFooter = () => {
        const {totalPages, currentPage, renderNoItem,} = this.props;
        const {lists} = this.state;
        if (totalPages === currentPage || totalPages === 0) {
            if (renderNoItem && (lists || []).length === 0) {
                return renderNoItem();
            }
            return (
                <View style={styles.loadingFooter}>
                    <Text style={styles.loadingText}>没有更多了</Text>
                </View>
            );
        }
        return (
            <View style={styles.loadingFooter}>
                <Text style={styles.loadingText}>加载中</Text>
            </View>
        );
    }
    render() {
        const {renderFooter, Wrapper, refresh,} = this.props;
        const { refreshing } = this.state;
        return (
            <Wrapper
                ListFooterComponent={renderFooter || this.renderFooter}
                refreshControl={refresh ? (
                    <RefreshControl
                        tintColor={'red'}
                        refreshing={refreshing}
                        onRefresh={this.onRefresh}
                    />
                ) : null}
                ref={(v: any) => { this.state.lists = v; }}
                keyExtractor={(item : any, index: number) => `${item.id}-${index}`}
                removeClippedSubviews={false}
                onEndReachedThreshold={1}
                showsVerticalScrollIndicator={false}
                initialNumToRender={8}
                maxToRenderPerBatch={6}
                scrollEventThrottle={1}
                {...this.props}
            />
        );
    }
}

// 样式表
const styles = StyleSheet.create({
    loadingFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        paddingBottom: 20,
    },
    loadingText: {
        fontSize: 12,
        color: 'red',
    },
});
