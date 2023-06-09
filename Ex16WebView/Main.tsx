//## WebView library-버전 충돌이 있으면 낮은버전으로 설치
//$ npm install react-native-webview@^12.1.0 [@ 버전 명시 ^<- 이상]
import React from 'react'
import {View,Button}from 'react-native'
import WebView from 'react-native-webview'

export default function Main():JSX.Element{
    return(
        <View style={{flex:1,padding:16}}>
            <WebView source={{uri:'https://reactnative.dev'}}></WebView>

            <Button title='button'></Button>
            {/* 여러개 웹뷰 존재가능 */}
            {/* 억지로 높이를 지정하고 싶다면 */}

            <View style={{height:200}}>
            <WebView source={{uri:'https://www.naver.com'}}></WebView>
            </View>

            <WebView source={{uri:'http://mrhisj23.dothome.co.kr/WebProjTeamC/index.html'}}></WebView>
            <WebView source={{uri:'http://vasco1379.dothome.co.kr/03_KakaoMapApi.html'}}></WebView>
            
        </View>
    )
}