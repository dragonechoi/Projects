import React,{Component, useEffect, useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native'

export default class Main extends Component{

    render(): React.JSX.Element {
        return(
            <View style={style.root}>
                {/* 새로운 Custom Component 제작 방법 */}
                {/* 1.Class Component : Component Class 를 상속해서 만드는 일반적인 Component */}
                {/* 2.functionalComponent : 마치 함수를 만드는 방식 ㅓㅊ럼 만들어진 Component [함수형 컴포넌트] */}

                {/* 1) 두 컴포넌트의 차이를 알기 위해... 익숙한 class Component 만들어보기 */}
                <MyComponent></MyComponent>

                {/* 2) 함수형 컴포넌트 - 함수를 마치 객체인양*/}
                <MyComponent2></MyComponent2>

                {/* 즉, 간단한 콘텐츠를 화면에 보여주고자 할떄 간결하게 작성할 수 있는 컴포넌트 */}
                {/* 단, Component 상속받지 않았기에 ... 생성자X,state X, props X */}

                {/* 3) 대신에 props(속성)은 전달 받는 것이 가능함 */}
                {/* 3.1) props를 받는 일반적인 class cpmponent */}
                <MyComponent3 data='aaa'></MyComponent3>

                {/* 3.2) props를 받는 functional component */}
                <MyComponent4 data='bbb'></MyComponent4>

                {/* 3.3) 여러개의  속성을 받아보기 */}
                <MyComponent5 data='ccc' title='sam'></MyComponent5>

                {/* 3.4) 여러개의 속성을 구조분해 할당으로 받기 */}
                <MyComponent6 data='ccc' title='sam'></MyComponent6>

                {/* 4) 컴포넌트들 간의 데이터 제어*/}
                <AAA onPress={this.changeText}></AAA>
                <BBB msg={this.state.msg}></BBB>

                {/* 결론적으로 functional component는 class component에 비해 */}
                {/* 코딩이 간결하여 편하지만 state가 없기에 단순화면 컴포넌트용으로 적합하였음.. */}
                {/* 하지만, 현재는 functional Component의 간결한 코딩이 더 선호 되어서  */}
                {/* stare가 없다는 단점을 보완하기 위한 Hook이라는 개념이 새로이 도입되었음. */}

                {/* 5) functional component Hook 실습 */} 
                <MyComponent7></MyComponent7>
            </View>
        )
    } //render

    //아주 특별한 멤버변수
    state:React.ComponentState={msg:"Hello"}
    changeText=()=>this.setState({msg:"nice to meet you"})

}//Main

// 5)functional component Hook... 
function MyComponent7():JSX.Element{
    // 함수형 컴포넌트는 state 가 없음 
     //함수형 컴포넌트에서 state를 사용할 수 있도록 만드는 문법 useState()

     //msg라는 특별한 변수 (state능력을 받은)와 값을 변경하는 setMsg()메소드 선언
     let [msg,setMsg] =useState<string>("Hello")
     const [age,setAge]=useState(0) //Number type도 가능 <> 없으면 자동추론

     //함수형 컴포넌트는 라이프사이클 메소드도 없음
     //화면을 갱신할때 자동 호출되던 componentDidUpdate,componentDidMount 메소드를 대체하는 함수 
     //화면이 처음 시작할떄와 state변경으로 인해 화면이 갱신될때 마다 호출되는 기능을 만들고 싶을떄...
     //ex.서버에서 데이터를 읽어오거나... DB 작업등 .. 할떄.
     useEffect( ()=>{
        console.log('useEffect Call...')
     } )

    return(
        <View style={{padding:8}}>
            <Text style={style.text}>{msg}</Text>
            <Button title="button" onPress={()=>setMsg("good")}></Button>

            <Text style={style.text}>{age}</Text>
            <Button title="add age"onPress={()=>setAge(age+1)}></Button>
        </View>
    )
}

// 4) 컴포넌트들 간에 데이터 제어 - 직접참조는 불가능
//4.1) 버튼을 가진 컴포넌트
type AaaProps={onPress:()=>void}
const AAA=(props:AaaProps)=>{
    return(
        <View style={{padding:16}}>
            <Button title="change" onPress={props.onPress}></Button>
        </View>
    )
}
// 4.2) 버튼에 의해 변경될 글씨를 보여주는함수형 컴포넌트
type BbbProps={msg:string}
const BBB=(props:BbbProps)=>{
    return(
        <View style={{padding:8}}>
            <Text style={style.text}>message : {props.msg}</Text>
        </View>
    )
}

//3) type
type props={data:string,}//프로퍼티 자료형

//3.3) 여러개 프로퍼티 받기 
type Props2={data:string,title:string}

function MyComponent6({data,title}:Props2){ //구조분해할당
    return(
        <View>
             <Text style={style.text}>MyCompoentnt6 data: {data}</Text>
            <Text style={style.text}>MyCompoentnt6 title: {title}</Text>
        </View>
    )
}

function MyComponent5(props2:Props2){
    return(
        <View>
            <Text style={style.text}>MyCompoentnt5 data: {props2.data}</Text>
            <Text style={style.text}>MyCompoentnt5 title: {props2.title}</Text>
        </View>
    )
}

//3.2) props 를 받는 functional Component
function MyComponent4(props:props){ //태그문의 속성으로 지정한 값들은 파라미터로 전달됨
    return(
        <View>
            <Text style={style.text}>MyComponent4 : {props.data}</Text>
        </View>
    )
}

// 3.1) props 를 받는 class Component

class MyComponent3 extends Component <props>{
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>My Component3 : {this.props.data}</Text>
            </View>
        )
    }
}

//2) functional component
function MyComponent2():JSX.Element{
    //생성자 존재하지 않음
    //constructor(){}

    //화면갱시넹 영항을 주는 아주 특별한 변수 state도 없음
    //컴포넌트 사용하는 태그문에서 전달한 프로퍼티(property.속성)들 가진 props 라는 특별한 변수도 없음


    return (
        <View>
            <Text style={style.text}>Hello MyComponent2</Text>
        </View>
    )
}

//2.1) 함수형 컴포넌트를 익명함수형태로 만들수도 있음.
// const MyComponent2= function():JSX.Element{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent2</Text>
//         </View>
//     )
// }

//2.2) 화살표함수형태로 함수형 컴포넌트 설계
  
// const MyComponent2=():JSX.Element=>{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent2</Text>
//         </View>
//     )
// }
//축약형으로 사용가능
//const MyComponent2= ():JSX.Element => <View><Text style={style.text}>Hello MyComponent2</Text></View>
    


// 1) 일반적인 컴포넌트
class MyComponent extends Component{
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>Hello My Component</Text>
            </View>
        )
    }
}

//StyleSheet object
const style= StyleSheet.create({
    root:{flex:1,padding:16},
    text:{padding:8,color:"black"}
})
   
