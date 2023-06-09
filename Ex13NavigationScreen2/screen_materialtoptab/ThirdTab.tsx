import React from "react";
import {View,Text, StyleSheet} from 'react-native'

import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'

import { TopTabScreenList } from "../MainMaterialTopTab";

type ThirdProps= MaterialTopTabScreenProps<TopTabScreenList,'Three'>

export default function ThirdTab(props:ThirdProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>TAB#3</Text>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1,justifyContent:"center" , alignItems:'center'}
    , text:{padding:8,color:'black',fontWeight:'bold'}
})
