//## reacy native는 사진앱 or 카메라앱을 실행하는 기능이없음 ##
//## 그래서 라이브러리를 사용 ~ react-native-image-picker
//## 라이브러리가 외부 저장소 사용에 대한 퍼미션을 알아서 처리 별도의 추가작업 필요 없음

import React, { useState } from "react";
import {View,Text,Image,Button,Alert,StyleSheet, ImageURISource} from 'react-native'

//이미지 피커 라이브러리 기능메소드 import
import { Asset, CameraOptions, ImageLibraryOptions, ImagePickerResponse, launchCamera,launchImageLibrary } from "react-native-image-picker";

//functional component 
export default function Main():JSX.Element{

    //화면 갱신의 영향을 주는 아죽 특별한 변수 state 를 만들 수 있는 기능함수 - useState()
  const [img,setImg] = useState<ImageURISource>({uri:'https://media.istockphoto.com/id/1393313182/ko/%EC%82%AC%EC%A7%84/%EC%9B%A8%EC%9D%BC%EC%8A%A4%EC%96%B4-corgi-%ED%8E%A8%EB%B8%8C%EB%A3%A9-%EA%B2%BD%EA%B2%AC.jpg?s=2048x2048&w=is&k=20&c=Kw6KMoel4q9KfYPS1yPywJEE3kV4o6IWBPUgFRRWE-M='})
    
  //카메라 앱을 실행하는 기능 화살표 함수
    const showCamera=()=>{

        //1.옵션 객체
        const options:CameraOptions={
            mediaType:"photo",
            cameraType:"back",
            saveToPhotos:true,
            quality:1,
            videoQuality:"high",
        }
        //촬영 결과를 callBack 메소드로 처리함 
        launchCamera(options,(response:ImagePickerResponse)=>{ //파라미터로 응답객체 받음
            if(response.didCancel)Alert.alert('촬영이 취소 되었습니다.')
            else if(response.errorMessage) Alert.alert("Error"+response.errorMessage)
            else{
                //이곳에 왔다면 이미지가 잘 촬영 된것임 
                //촬영된 이미지는 Response 객체의 assets라는 속성으로 전달 됨
                if(response.assets!=null){
                    //선택된 사진 이미지 객체를 이미지뷰가 보여주는 image에 저장
                    //선택된 이미지의 uri 경로를 얻어오기 
                    const uri=response.assets[0].uri

                    const source={uri:uri}
                    setImg(source)

                }
            }
        })
    }
      //사진 앱을 실행하는 기능 화살표 함수
    const showPhoto=async ()=>{
        //option 객체 생성 
        const oprions:ImageLibraryOptions={
            mediaType:"photo",
            selectionLimit:5,
        }
        //ES7의 새로운 문법: async-await(프라미스) 문법 [callback 비동기 작업을 동기작업처럼 처리]
       const response= await launchImageLibrary(oprions)
       if(response.didCancel) Alert.alert('사진선택이 취소되었습니다.')
       else if(response.errorMessage)Alert.alert(response.errorMessage)
       else{
        const uris:Asset[]=[]
        response.assets?.forEach((value)=>uris.push(value))

        //원래는 FlatList들로 이미지를 보여주어야함
        //첫번쨰 이미지만 
        setImg(uris[0])
       }

    }

    return(
        <View style={style.root}>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Button title="show camera app" onPress={showCamera}></Button>
            <Button title="show photo app" color='green' onPress={showPhoto}></Button>
          </View>
          <Text style={style.text}>{img.uri}</Text>
          <Image source={img} style={style.img}></Image>
        </View>
    )
}
const style=StyleSheet.create({
    root:{flex:1,padding:16,},
    text:{padding:8,color:'black',},
    img:{marginTop:8, flex:1,}
})