import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ListRenderItemInfo, TouchableOpacity, Alert, Image} from 'react-native'

export default class Main extends Component{

    // RN에서 ListView의 역할을 하는 컴포넌트는 2가지 종류가 있음.
    //1. FlatList    : 일반적인 리스트뷰
    //2. SectionList : 섹션에 따라 구분 지어서 리스트할 때 사용

    // 먼저 FlatList에서 사용할 대량의 데이터 배열 - 데이터변경에 실시간 대응하려면 state 사용
    state:React.ComponentState = {
        //1. 일단 간단한 string 문자열배열
        datas: ["aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd","aaa","bbb","ccc","ddd"],

        //2. 텍스트 2개, 이미지 1개 아이템 뷰 - 데이터들
        items: [ 
            {name:"sam", message:"Hello world", img:{uri:'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'}},
            {name:"robin", message:"Hello RN", img:{uri:'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg'}},
            {name:"hong", message:"Hello android", img:{uri:'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg'}},
            {name:"kim", message:"Hello react", img:{uri:'https://cdn.pixabay.com/photo/2016/10/16/13/44/young-woman-1745173_1280.jpg'}},
            {name:"rosa", message:"Hello ios", img:{uri:'https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369_1280.jpg'}},
            {name:"moana", message:"Hello moana", img:{uri:'https://cdn.pixabay.com/animation/2022/09/12/14/50/14-50-36-1_512.gif'}},
            {name:"jack", message:"Hello movie", img:{uri:'https://cdn.pixabay.com/animation/2023/05/16/14/37/14-37-11-404_512.gif'}},
            {name:"merry", message:"Hello tom", img:{uri:'https://cdn.pixabay.com/animation/2023/03/11/19/26/19-26-29-452_512.gif'}},
            {name:"lee", message:"Hello web", img:{uri:'https://cdn.pixabay.com/animation/2022/07/31/23/00/23-00-56-410_512.gif'}},
            
         ]

    }

    render(): JSX.Element {
        return (
            <View style={style.root}>
                <Text style={style.title}>Flat List</Text>

                {/* FlatList : RN의 기본 리스트뷰 컴포넌트 */}
                {/* 필수 2개의 속성(props) - data, renderItem */}
                {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
                {/* <FlatList
                    data={this.state.datas}
                    renderItem={ ( obj:ListRenderItemInfo<any>)=>{ //파리미터 1개 : 렌더링할 아이템정보 객체
                        return <Text> {obj.index} : {obj.item} </Text>                        
                    }}></FlatList> */}

                {/* 위 renderItem의 obj 파라미터 객체를 구조분해할당 */}
                {/* <FlatList
                    data={this.state.datas}
                    renderItem={ ( {item, index} )=>{ //구조분해할당 obj객체의 index, item멤버를 뽑아오기
                        return <Text> {index} : {item} </Text>                        
                    }}></FlatList> */}

                {/* 아이템뷰의 클릭이벤트 처리 */}
                {/* <FlatList
                    data={this.state.datas}
                    renderItem={({item, index})=>
                            <TouchableOpacity style={style.itemView} onPress={()=>Alert.alert(item)}>
                                <Text>index : {index}</Text>
                                <Text>data : {item}</Text>
                            </TouchableOpacity>}>
                </FlatList> */}

                {/* 2. 텍스트2개, 이미지 1개 짜리 아이템 뷰 모양 */}
                <FlatList
                    data={this.state.items}
                    renderItem={({item, index})=>
                        <TouchableOpacity style={style.item} onPress={()=>this.showAlert(item, index)}>
                            <Image source={item.img} style={style.itemImg}></Image>
                            <View>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemMessage}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    }></FlatList>

            </View>
        )        
    }

    showAlert= (item:any, index:number)=>{
        Alert.alert(item.name +" : "+index)
    }

}

//스타일객체
const style= StyleSheet.create({
    root: {flex:1, padding:16,},
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16,
        color:'black',        
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        margin:8,
        padding:8,
    },

    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
    }
})