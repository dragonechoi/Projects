//### TypeScript : JavaScript + static type #######

import React,{Component, ComponentState} from "react";
import {View,Text, Button, StyleSheet, Alert, Image} from 'react-native'

class MainComponent extends Component{
    // 멤버변수 -property 
    message : string="Hello React Native"

    //화면 갱신에 영향을 주는 아주 특별한 멤버변수 ( 속성 ) - state 
    state: React.ComponentState = {
        msg: 'Hello RN',
        img:require('./image/newyork.jpg')


    }
    render(): JSX.Element {
        return(
            <View style={style.root}>
               
                <Button title='button' onPress={clickBtnFunction3}></Button>
               
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정가능 */}
              
                <Button title="버튼" onPress={()=>Alert.alert("반갑습니다")} color='red'></Button>
               
                {/* 버튼 콜백용 메소드는 전역보다는 이 컴포넌트 클래스의 멤버로 존재하는 것을 권장 */}
                <Button title="press me" color='green' onPress={this.clickbtn}></Button>
               
                {/* 버튼 클릭시에 Text 컴포넌트 변경 */}
                <View style={{margin:8}}>
                    <Button title="change Text" onPress={this.changeText2}></Button>
                    {/* TextComponent 글씨가 변경 되고자 한다면 .. 글씨가ㅏ 별도의 변수로 저장 되어 있어야 함 : 멤버변수로 만들어보기 */}
                    <Text style={style.text}>{this.message}</Text>
                </View>

                <View style={{margin:8}}>
                    <Button title="change Text" color="black" onPress={this.changeMsg}></Button>
                    {/* TextComponent 글씨가 변경 되고자 한다면 .. 글씨가ㅏ 별도의 변수로 저장 되어 있어야 함 : 멤버변수로 만들어보기 */}
                    <Text style={style.text}>{this.state.msg}</Text>
                </View>


                <Button onPress={this.changeImage}  title="change Img" color="red"></Button>
                <Image style={style.img} source={this.state.img} ></Image>

            </View> //최상위 뷰 마지막

            
        )

    }//render method 마지막위치
    //멤버메소드 - 버튼 콜백 함수
    changeImage=()=>{
        this.setState({img:require('./image/paris.jpg')})
    }
    changeMsg=()=>{
        //화면에 영향을 미치는 아주 특별한 변수 
        //this.state.msg="Hello" //이렇게 변경하면 화면갱신 안됨
        //자동 화면 갱신이 되려면 반드시 setState() Method 로변경 해야만 가능
        this.setState({msg:"Nice To Meet You"})
    }

    changeText2=()=>{
        this.message="Nice To Meet You"
        //변수값이 변경되어도 화면 갱신은 이루어지지 않습니다.
        //억지로 화면을 다시 그려내는 [render()재호출]
        this.forceUpdate() //강제로 화면 갱신 --권장하지 않음 이유: 화면을 전체 갱신

        //그래서 화면 갱신의 영향을 주는 아주 특별한 변수를 사용해야함.
        //그 변수는 모든 Component 가 기본적으로 가지고 있는 변수명 
        //그 변수명 : state 
    }

    changeText(){
        //Text 컴포넌트가 보여주는 값을 가진 message 멤버변수의 값을 변경
        this.message="Nice To Meet You"
        //이 함수 안에서 this.message는 누구?
        //이 changeText 라는 함수의 멤버 변수로 this.message를 인식함 
        // MainComponent의 멤버 message로 인식하지 못함 
        //이를 해결하기 위해 별도의 객체로 인식되지 않는 함수 표기법
        //화살표 함수 를 콜백 메소드로 사용해야함
    }
    
     clickbtn(){
        Alert.alert('버튼 클릭')
    }

}//MainComponent 마지막위치

// 전역의 위치
// 선언적 함수
function clickBtnFunction(){
    //경고창 변경
    Alert.alert("PRESSD BUTTON")
}


//2)익명 함수 
let clickBtnFunction2=function(){
    Alert.alert("PRESSD BUTTON 2")
}
let clickBtnFunction3=()=> Alert.alert("clickBtnFunction3")

const style=StyleSheet.create({
    root:{
        flex:1,
        padding:16,

    },
    text:{
        fontWeight:'bold',
        color:"black",
        padding:8,

    },
    img:{
        flex:1,
        width: "100%"
    }
})
export default MainComponent