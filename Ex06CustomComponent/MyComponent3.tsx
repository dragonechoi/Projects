import React,{Component} from 'react'
import {View,Text,Button}from 'react-native'

type Props={
    title:String,
    aaa: () =>void //함수 타입 [파라미터x , 리턴 x]
}

class MyComponent3 extends Component<Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title}></Button>
            </View>
        )
    }
}
export default MyComponent3