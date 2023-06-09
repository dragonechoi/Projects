import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// BottomTabNavigator를 만들어내는 기능함수 import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// BottomTabNavigator에 등록할 screen 컴포넌트 리스트 타입
export type BottomTabScreenList={
    First: undefined,
    Second:undefined,
    Third:undefined,
} 

// BottomTabNavigator 객체 생성
const BottomTab=createBottomTabNavigator<BottomTabScreenList>()

//Tab으로 보여줄 화면 screen 컴포넌트 3개 import
import FirstTab from "./screen_bottom/FirstTab";
import SecondTab from "./screen_bottom/SecondTab";
import ThirdTab from "./screen_bottom/ThirdTab";
import { Image } from 'react-native';

export default function Main():JSX.Element{
    return(
        <NavigationContainer>
            <BottomTab.Navigator 
            initialRouteName="Second"
            screenOptions={{
                tabBarActiveBackgroundColor:'#1a7bad',
                tabBarInactiveBackgroundColor:'black',
                tabBarActiveTintColor:'#5fde12',
                tabBarShowLabel:true,
                tabBarLabelPosition:"below-icon"
            }}>
                <BottomTab.Screen
                 options={{
                    tabBarLabel:"검색",
                    tabBarIcon:()=>{return <Image source={require('./icon/RN_logo.png')} style={{width:24,height:24}}></Image>},
                    tabBarBadge:'new',
                    tabBarActiveTintColor:'blue',
                 }} 
                 name="First" 
                 component={FirstTab}
                 ></BottomTab.Screen>

                <BottomTab.Screen name="Second" component={SecondTab}></BottomTab.Screen>
                <BottomTab.Screen name="Third" component={ThirdTab}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}
