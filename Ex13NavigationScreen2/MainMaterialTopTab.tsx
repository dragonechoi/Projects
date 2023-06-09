import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Image} from 'react-native'

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export  type TopTabScreenList={
    one:undefined       //실제 컴포넌트 명과 전혀 다른 name을 화면이름으로 지정해도 됨
    two:undefined
    Three : undefined
}

const TopTab= createMaterialTopTabNavigator <TopTabScreenList> ()

//탭에의해 전환될 화면 생성(create) & 호출(import)
import FirstTab from "./screen_materialtoptab/FirstTab";
import SecondTab from "./screen_materialtoptab/SecondTab";
import ThirdTab from "./screen_materialtoptab/ThirdTab";

export default function MainMaterialTopTab():JSX.Element{
    return(
        <NavigationContainer>
            <TopTab.Navigator
            initialRouteName="two"
            tabBarPosition="top"
            screenOptions={{
                swipeEnabled:true,
                tabBarActiveTintColor:'#c75ffd',
                tabBarInactiveTintColor:'gray',
                tabBarIndicatorStyle:{
                    backgroundColor:'#fd4b3a',
                    height:8,
                },
                tabBarShowIcon: true,
            }}>
                <TopTab.Screen name="one" component={FirstTab}></TopTab.Screen>
                <TopTab.Screen name="two" component={SecondTab} 
                options={{tabBarLabel:'두번쩨'
                ,tabBarShowLabel:false
                , tabBarIcon:()=>
                <Image source={require('./icon/RN_logo.png')}style={{width:24,height:24}}></Image>}}></TopTab.Screen>
                <TopTab.Screen name="Three" component={ThirdTab}></TopTab.Screen>
            </TopTab.Navigator>
        </NavigationContainer>
    )
}