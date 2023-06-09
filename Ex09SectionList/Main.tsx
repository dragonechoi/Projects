import React, {Component} from 'react'
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native'

export default class Main extends Component{

    // 리스트뷰의 섹션별 헤더뷰를 가질 수 있는 SectionList 컴포넌트
    // 대량의 데이터
    state:React.ComponentState= {
        // SectionList의 섹션 하나 객체에는 title, data 2개의 프로퍼티가 필요함
        sectionDatas: [
            {title:'한식', data:['백반','고기산적','비빔밥']},
            {title:'중식', data:['짜장면','짬뽕','탕수육']},
            {title:'일식', data:['초밥','회','덮밥']},
        ]
    }

    render(): JSX.Element {
        return (
            <View style={style.root}>
                <Text style={style.title}>SectionList Food Menu</Text>

                {/* SectionList에 필요한 필수 속성 3개 */}
                {/* 1. sections  - 섹션 title과 섹션별 data를 가진 배열 */}
                {/* 2. renderSectionHeader - 섹션별 title 영역이 그려질 render 뷰를 리턴하는 콜백함수 지정 */}
                {/* 3. renderItem - 섹션별 item들(string)이 그려질 render 뷰를 리턴하는 콜백함수 지정 [FlatList와 동일] */}
                <SectionList
                    sections={this.state.sectionDatas}
                    //헤더 모양 - 위 sections속성에 지정한 배열의 요소개수만큼 반복하여 헤더영역 컴포넌트 생성 및 리턴
                    renderSectionHeader={({section})=>{
                        return (
                            <View style={style.sectionHeader}>
                                <Text style={style.sectionTitle}>{section.title}</Text>
                            </View>
                        )
                    }}
                    renderItem={( {item, index, section} )=>{
                        return (
                            //섹션별로 index 번호가 다시 0~...
                            <TouchableOpacity style={style.sectionItem} onPress={()=>Alert.alert(index+" : " +item+" ~ "+section.title)}> 
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}></SectionList>
            </View>
        )        
    }
}

const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:24,
    },

    sectionHeader: {
        padding:8,
        backgroundColor:'gray',
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
    },

    sectionItem: {
        padding:8,
    }

})