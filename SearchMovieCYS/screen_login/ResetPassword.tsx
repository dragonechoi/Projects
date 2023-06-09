import React, { useState } from 'react'
import {View, Text, StyleSheet,Button, Image, Alert} from 'react-native'

// 공통하숑 컴포넌트 import
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

import {StackScreenProps} from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type ResetPasswordProps = StackScreenProps<LoginNavScreenList,'ResetPassword'>

export default function ResetPassword(props:ResetPasswordProps):JSX.Element{ //props객체 {Navigation , Route}
    // return(
    //     <View style={style.root}>
    //         <Text>RESET PASWORD</Text>

    //     </View>
    // )

    // 탭에 따른 화면 구성을 위한 state 변수들
    const [tabs,SetTabs] = useState<string[]>(['이메일','전화번호'])
    const [tabIndex,SetTabIndex] = useState<number>(0)

    // 탭 선택에 따른 안내메세지
    const message=[
        '이메일을 입력하면 임시 비밀번호를 보내드립니다.',
        '전화번호를 입력하면 임시 비밀번호를 보내드립니다.',
    ]


    //  2. 비밀번호 재설정 화면 
    return(
        <View style={style.root}>
            {/* 1.콘텐츠 영역 */}
            <View style={style.content}>
                {/* 좌물쇠 이미지 표시영역 */}
                <View style={style.lockImageContainer}>
                    <Image source={require('../Images/lock.png')}></Image>
                </View>

                {/* 1.2 Title 안내문구 표시  */}
                <Text style={style.title}>로그인에 문제가 있나요?</Text>

                {/* 1.3 이메일또는 전화 번호 선택에 대한 안내문구 */}
                <Text style={style.message}>{message[tabIndex]}</Text>

                {/* 1.4 탭 만들기 */}
                <View style={style.tabContainer}>
                    {
                        tabs.map((value,index)=>{
                            return(<TabComponent label={tabs[index]} selected={index==tabIndex} onPress={()=>SetTabIndex(index)} key={index}></TabComponent>)
                        })
                    }
                </View>

                {/* 1.5 정보 입력박스 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 1.6 전송 버튼*/}
                <View style={{width:'100%',margin:16,}}>
                    <Button title='전송' onPress={()=>Alert.alert('임시비밀번호가 발급 되었습니다.','로그인 후 정보 수정을 통하여 안전한 비밀번호로 변경해주시길 바랍니다.')}></Button>
                </View>

            </View>

            {/* footer 영역 */}
            <View style={style.footer}>
                <Text style={style.goBack} onPress={()=>props.navigation.goBack()}>로그인 화면으로 돌아가기</Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1, backgroundColor:'FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    goBack:{
        color:"#3769EF",
        textAlign:'center'
    },
    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderRadius:80,
        borderColor:'#292929',
        margin:16,
    },
    title:{
        fontSize:16,
        marginBottom:16,

    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    }

})