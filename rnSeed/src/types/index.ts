import React from "react";

export type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

export interface PropTypes {
    statusBarPaddingTop?: {
        paddingTop: number | string
    },
    navigation?: any
}

export interface RouterModule{name: string,router: RouterScene[]}

export interface RouterScene {
    type: string,
    name: string,
    component: any,
    options?: { Icon: string, tabBarLabel: string }
}
