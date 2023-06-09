import React, { useState } from 'react'
import {View,Button,Text,StyleSheet,ScrollView,Alert} from 'react-native'

export default function Main():JSX.Element{

    const [message,setMessage]=useState<string>('message.......')

    //영화 정보의 타입
    type MovieInfo={
        id:string,
        title:string,
        releaseYear:string
    }

    //RN 개발자 사이트의(메타)movise.json 파일 객체 정보
    type MoviesResponse={
        title:string,
        discription:string,
        movies:MovieInfo[]
    }
    const [moviesResponse,setMoviesResponse]=useState<MoviesResponse>({title:'',discription:"",movies:[]})

    const fetchData=()=>{
        console.log('fetch start...')
        
        //1.JavaScript의 네트워크 작업 객체: XMLHttpRequest
        // const xhr=new XMLHttpRequest()
        //  //서버의 응답 결과를 받을때 반응하는 콜백 메소드를 등록
        //  xhr.onreadystatechange=()=>{
        //     //서버의 응답은 여러개 올 수 있음 .
        //     if(xhr.readyState==4 && xhr.status==200){
        //         Alert.alert('응답이 완료되었 습니다.')
        //         setMessage(xhr.responseText)
        //     }
        //  }
        //  xhr.open('GET','http://vasco1379.dothome.co.kr/index',true)
        //  xhr.send()

        //2.fetch()함수 -js에 기본 내장된 네트워크 통신 라이브러리 
        //     //promiss .then 문법
        //     fetch('http://vasco1379.dothome.co.kr/index.js')
        //    .then((response:Response)=>Alert.alert(response.status.toString())) //결과 : 200-Ok)
        
        //응답 결과를 글씨로 받아오기
        // fetch('http://vasco1379.dothome.co.kr/index.js')
        // .then((response:Response)=>{
        //     //응답 객체에게 응답 결과를 글씨로 바꿔달라고 요청-비동기 작업
        //    return response.text()  
        // }).then((text:string)=>{
        //     setMessage(text)
        // }).catch((error)=>{ // 위 작업중 하나에서 에러 발생하면 실행되는 영역
        //     Alert.alert(error)
        // })

        //위then()메소드의 파라미터 화살표함수의 축약표현
        // fetch('http://vasco1379.dothome.co.kr')
        // .then(response=>response.text())
        // .then(text => setMessage(text))

        //3.OPEN API - JSON 파싱 
        //3.1 우선 facebook 에서 샘플로 제공하는 json파일 이용 파싱 실습
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text())
        // .then(text=>setMessage(text))

        //json파싱
        fetch('https://reactnative.dev/movies.json')
        .then(res=>res.json())
        .then(obj=>setMoviesResponse(obj))

        //HTTP REQUEST METHOD ...fetch 
        let name="sam"
        let message="hello"
        fetch(`http://vasco1379.dothome.co.kr/aaa.php?name=${name}&message=${message}`)
        .then(res=>res.text())
        .then(text=>setMessage(text))

        //2)Post method
        fetch('http://vasco1379.dothome.co.kr/bbb.php' , {
            method:'POST',
            headers: {'Content-type':"application/x-www-form-urlecoded"},
            body:`name=${name},&msg=${message}`

        })
        .then(res=>res.text())
        .then(text=>setMessage(text))

        //3)POST로 보낼 데이터가 객체일때는 그냥 json 문자열로 변환하여 서버로 전송
        let person={name:'robin',age:20,address:'seoul'}
        fetch('http://vasco1379.dothome.co.kr/cc.php',{
            method:'POST',
            headers:{'Contnet-Type' :'application/json'}, //보낼 데이터가 JSON
            body: JSON.stringify(person)//오브젝트를 JSON 문자열로 변환
        }).then(res=>res.json).then(obj=>Alert.alert('Json 파싱된 객체 받음'))
    }

    return(
        <View style={style.root}>
            <Button title='fetch data from network' color={'#b75aab'} onPress={()=>fetchData()}></Button>
            <ScrollView style={style.container}>
                <Text style={style.text}>{message}</Text>
            </ScrollView>

            {/* 영화 정보 리스트 */}
            <View style={{flex:1,marginTop:16}}>
                <Text style={{color:'black',fontWeight:'bold',padding:8}}>{moviesResponse.title}</Text>
                {/* 영화 movies는 여러개...FlatList컴포넌트 써야하지만... */}
                {
                    moviesResponse.movies.map( (movie:MovieInfo) => {
                        return(
                            <View style={style.item}>
                                <Text>{movie.id}</Text>
                                <Text>{movie.title}</Text>
                                <Text>{movie.releaseYear}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    root:{flex:1,padding:16},
    container:{marginTop:16},
    text:{padding:8,color:'black'},
    item:{ borderWidth:1,borderRadius:4, padding:8, margin:2 },
})
