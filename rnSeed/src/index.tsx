/**
 *  如同APP页面
 */
import React, { Component } from 'react';
import {StyleSheet,} from 'react-native';
import {Provider} from 'mobx-react';
import getRouter from './routers'
import getStores from './stores'
type Props = {};
export default class App extends Component<Props>{
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Provider>{ getRouter() }</Provider>
        );
    }
}

const styles = StyleSheet.create({});
