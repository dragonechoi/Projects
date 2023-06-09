//AsyncStorage Library-Android의 SharedPrefrerences 와 비슷한 기능


import React, { useCallback, useState } from "react";
import {View,Text,TextInput,Button,StyleSheet,Alert} from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";

export function Main():JSX.Element{

    // TextInput요소의 글씨가 변경될때마다 저장하는 state 변수
    const[inputText,setInputText]=useState<string>('')
    const [data,setData]=useState<string>('RESULT')

    const changeText=(value:string)=>{
        setInputText(value)
    }

    //load data from local storage method
    const loadData= async()=>{
        // 비동기로 AsyncStorage의 "Data"라는 키의 value값을 읽어오기
        // async = awit 문법으로 비동기 작업 을 동기 작업 처럼 처리
       let value= await AsyncStorage.getItem('Data')
       if(value !=null) setData(value)
    }
    
    // save data to local storage method 
    const saveData=()=>{
        //TextInput요소에 써있는 글씨를 AsyncStorage에 저장[key-value]
        //TextInput요소의 글씨가 변경될때마다 저장하는 state 변수 :inputText
        //비동기 작업 이기에 promiss문법인 .then()메소드를 사용
        AsyncStorage.setItem("Data",inputText).then(()=>Alert.alert('saved data'))
        setInputText('')
    }

    return(
        <View style={style.root}>
            {/* 저장할 데이터를 입력할 컴포넌트 */}
            <TextInput
            style={style.textInput}
            onChangeText={changeText}
            value={inputText}
            placeholder="Enter some text here"></TextInput>
            <Button title="save data" onPress={saveData}></Button>
        
            <View style={{marginTop:16}}>
                <Button title="Load data" color={'orange'} onPress={ loadData }></Button>
                <Text style={style.text}> {data} </Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    root:{ flex:1, padding:16},
    textInput:{ 
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16
     },
     text:{marginTop:16,
        padding:8,
        fontWeight:'bold',
        color:'black',
        fontSize:24
        }
})
