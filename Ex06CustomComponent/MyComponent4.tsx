import React,{Component} from 'react'
import {View,Text,Button}from 'react-native'

type Props={
    title:String,
    color:String,
    aaa: () =>void //함수 타입 [파라미터x , 리턴 x]
   
}

class MyComponent4 extends Component<Props>{

    //정적변수로 props가 전달되지 않을때 기본값 저장 가능
    //정적 타입들의 적용은 앱을 다시 실행해야 올바르게 적용됨
    static defaultProps={
        title:'untitle',
        color:'black',
        aaa:()=>{}
    }

    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}
export default MyComponent4