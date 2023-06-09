//리엑트 라이브러리 사용 
import React ,{Component}  from 'react';
import  { Button, Image, StyleSheet, Text,View } from 'react-native'

//리엑트네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    //리엑트의 Component클래스가 화면에 보여줄 View를 그려내는 작업 메소드 
    //이 메소드 안에서 JSX(Java Script +XML) 언어로 뷰를 설계하고 return 해줌
    render(){

        let name="SAM"
        let buttonTitle="click Me" //버튼에 보여질 글씨
        
        return (
            // <Text>Hello World</Text>
            // <Text>Nice to meet you</Text> 
            //Error - 컴보넌트는 1의 컴포넌트만 리턴 가능

            //뷰 그룹을 사용 (컴포넌트 그룹)
            // JSX는 xml안에서도 JS의 변수 ,함수 사용이 가능
            //XML 안에서 {}는 JS 문법을 쓰는 영역 
            //스타일 속성 적용 - 
            <View style={ style .root}>
                <Text style={style.titleText}>Hello {name} 님</Text>
                <Text style={style.text}>Nice to meet you</Text>
                {/* Button Component는 style 속성이 존재하지 않음 */}
                {/* <Button title={buttonTitle}></Button> */}
                <View style={{marginTop:16}}>

                <Button title={buttonTitle}></Button>
                <Image source={require('./image/newyork.jpg' )} style={style.img}></Image>

                </View>
            </View>
           
        )
    }//render method 

} //My App Class


// 스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체 생성 
const style = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#fa35aa',
        padding:16
    },
    titleText:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        margin:16,
    },
    text:{
        margin:8,
        color:'black'
    },
    img:{
        flex: 1,
        marginTop: 8,
        width: null,
         resizeMode: 'contain'
    }
})


//스타일객체 - 스타일 속성값은 css를 기반으로 제작
const textStyle={
    color: 'red',
    fontSize : 20, //기본 단위는 dp
    firntWeight: 'bold',
    margin:16
}
// RN는 기본적으로 display:felx가 적용되어 있음.
// 기본 배치 방향[flex-direction]이 column[세로] 방향
// 기본적으로 컴포넌트의 height은 wrap 임
const rootStyle={
    padding:16 ,
    backgroundColor:'#a3d15f',
    // height: '100%'
    // flex-grow속성 [android 의 layout-weight과 비슷한 속성]
    //RN 에서는 flex-grow속성을 그냉 flex 로 사용
    flex:1,
    // flexDirection:'row'
}

//중간에 있는 글씨 스타일
const plainTextStyle={
    margin:8,
    color:'black',
}
//버튼의 스타일 객체 는 무의미함 . 버튼 컴포넌트는 스타일링 불가능 !!
// const buttonStyle={
//     margin:80,

// }

//MyApp클래스를 다른 .js에서 사용할수 있도록 내보내기
export default MyApp


