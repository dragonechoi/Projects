import React, {Component} from 'react'
import {View, Image, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, TouchableNativeFeedback,Text, ScrollView, ImageBackground} from 'react-native'

export default class MainComponent extends Component{

    //화면갱신에 영향을 주는 아주 특별한 멤버변수
    state: React.ComponentState = {
        img: require('./image/moana02.jpg'),
        img2: require('./image/moana03.jpg'),
        imgArr: [
            require('./image/moana01.jpg'),
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            {uri:'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2016/10/16/13/44/young-woman-1745173_1280.jpg'},
        ],
        imgNum: 0,
    }

    render(): JSX.Element {
        return (
            //1. 그림이미지 source는 require()함수 이용 - 별도의 스타일이 없으면 원본사이즈
            // <View style={style.root}>
            //     <Image source={require('./image/moana01.jpg')}></Image>
            // </View>

            //2. 그림이미지를 네트워트 URL을 통해 가져오기 - uri 속성을 가진 객체를 지정해야만 함. - android의 인터넷 퍼미션은 기본 되어 있음.
            //   네트워크 이미지는 사이즈를 지정하지 않으면 보여주지 못함. - 스타일이 필수임
            // <View style={style.root}>
            //     <Image style={ {width:200, height:200} } source={ {uri:'https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg'} }></Image>                
            // </View>

            //3. 버튼 클릭으로 이미지변경은 이미 해봤음. 그래서 이미지를 클릭했을때 이미지변경
            //   RN은 클릭이 될 수 있는 뷰가 정해저 있음. [Button, Text, TouchableXXX ...]
            //   특정 컴포넌트를 클릭하고 싶으면. TouchableXXX.. 로 감싸서 만듦
            // <View style={style.root}>
            //     <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:208}}>
            //         <Image style={{width:200,height:200}} source={this.state.img}></Image>
            //     </TouchableHighlight>

            //     <TouchableOpacity onPress={this.clickImage2} style={{padding:4, width:208}}>
            //         <Image style={{width:200,height:200}} source={this.state.img2}></Image>
            //     </TouchableOpacity>  

            //     {/* android 에서만 적용되는 TouchableXXX  */}
            //     <TouchableNativeFeedback onPress={this.clickImage3}>
            //         {/* 단, 뷰그룹을 가지고 있어야 효과가 보여짐 */}
            //         <View style={{width:310, height:200, backgroundColor:'lightblue', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:8,}}>
            //             <Text style={{ color:'white', fontWeight:'bold', marginBottom:16}} >MOANA</Text>
            //             <Image style={{width:300, height:150}} source={this.state.imgArr[this.state.imgNum]}></Image>
            //         </View>
            //     </TouchableNativeFeedback>
            // </View>

            //4. 이미지가 많으면 스크롤이 필요함. 스크롤뷰 필요
            // <ScrollView style={style.root}>
            //     <Image source={this.state.imgArr[0]} style={style.img}></Image>
            //     <Image source={this.state.imgArr[1]} style={style.img}></Image>
            //     <Image source={this.state.imgArr[2]} style={style.img}></Image>
            //     <Image source={this.state.imgArr[3]} style={style.img}></Image>
            //     <Image source={this.state.imgArr[4]} style={style.img}></Image>
            // </ScrollView>

            //5. 배경 이미지 - CSS의 backgroud-image 는 없음 - ImageBackground 컴포넌트 사용           
            <View style={{flex:1}}>
                <ImageBackground source={this.state.imgArr[5]} style={{width:'100%', height:'100%'}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:40, margin:16}}>Image Background</Text>

                </ImageBackground>
            </View>
        )                
    }//render method..

    clickImage= ()=>{
        //Alert.alert('clicked')
        //Image컴포넌트가 보여주는 아주 특별한 변수 state 값을 변경하면 화면자동갱신
        this.setState({img: require('./image/moana05.jpg')})
    }

    clickImage2= ()=> this.setState({img2: require('./image/moana05.jpg')})

    clickImage3= ()=>{
        let num:number = this.state.imgNum
        num++
        if(num>6) num=0
        this.setState({imgNum:num})
    }

}

//스타일시트 객체
const style= StyleSheet.create({
    root: { flex:1, },
    img: {width:300, height:200, resizeMode:'cover'},
})