import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'

import {StackScreenProps} from '@react-navigation/stack'
import { StackScreenList } from '../Main'

type SecondProps=StackScreenProps<StackScreenList,"Second">


export default function SecondComponent(props:SecondProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>SECOND</Text>

            {/* Home 화면으로 돌아가는 버튼 */}
            <Button title='Back To The Screen' onPress={()=>props.navigation.navigate('Home')}></Button>

            {/* 이전 화면으로 돌아가는 버튼 */}
            <Button title='GoBack' color={'indigo'} onPress={()=>props.navigation.goBack()}></Button>

            {/* navigate()로 데이터를 전달 받았다면... */}
            {/* props의 route 라는 객체에게 파라미터값으로 전달 받을수 있음 */}
            <Text style={{padding:16,color:'blue',fontWeight:'bold'}}>{props.route.params?.name} , {props.route.params?.age}</Text>

            {/* 버튼 클릭시에 제목줄 제목 변경 */}
            <Button title='제목줄 변경' onPress={()=>props.navigation.setOptions({title:"멍냥멍냥"})}></Button>

        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1,padding:16},
    text:{padding:8,color:'black'}
})