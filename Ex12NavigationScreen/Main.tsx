// ### React Native는 기본적으로 Screen(화면) 전환 기능을 제공하지 않기에 Library를 사용해야함
//pakage.json

// 가장 유명한 화면 전환 라이브러리: React navigation [http://reactnavigation.org 사이트 참고]

//1.기본 필수 라이브러리 부터 추가 
//@react-navigation/native
//1.1 추가 라이브러리
//react-native-screens,react-native-safe-area-context

//Main컴포넌트 만들기 
import React from 'react'

//1) 가장먼저 Navigator 들을 감싸는 최상위 Container 컴포넌트가 있어야함
import { NavigationContainer } from '@react-navigation/native'

//2) 화면전환 방법을 결정하는 Navator의 종류가 여러개 ,,
// Stack , Drawer , BottomTab, MaterialBottomTab,MaterialTopTab
//각 네비게이터를 사용할때 마다 전용 라이브 러리를 추가로 설치 해야 함.

//이중에서 가장 기본인 StackNavigator 사용 - 라이브러리 설치
import { createStackNavigator } from '@react-navigation/stack'
// Stack Navigator 에 의해 전환될 화면 스크린 컴포넌트들 import
import HomeComponent from './screen/HomeComponent'
import SecondComponent from './screen/SecondComponent'
import { Button,Image } from 'react-native'

//typescript 에서는 스크린 리스트를 타입을 지정해줄 것을 권장
export type StackScreenList={
    Home:undefined , //화면(root)명 : 전환할떄 전달할 파라미터의 자료형
    Second:undefined|{name:string ,age:number}, // |(or)연산자로 타입 여러개를 지정가능
}

const stack=createStackNavigator<StackScreenList>()

export default function Main():JSX.Element{
    return(
        <NavigationContainer>
            <stack.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'indigo'},
                headerTintColor:'white',
                headerTitleAlign:'center'
            }}>
                <stack.Screen 
                options={{
                    title:'홈',
                    headerTintColor:'yellow',
                    headerRight:()=>{return <Button title='menu'></Button>} ,
                    headerLeft:()=>{return<Image source={require("./images/ms15.png")}style={{width:32,height:32,margin:16}}></Image>}
                    , headerTitle:()=><Image source={require("./images/ms15.png")}style={{width:32,height:32,margin:16}}></Image>
                    ,headerShown:true
                }} 
                name="Home"
                 component={HomeComponent}></stack.Screen>
                <stack.Screen name="Second" component={SecondComponent}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}
