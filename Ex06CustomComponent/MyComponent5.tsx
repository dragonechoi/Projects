import React,{Component} from 'react'
import {View,Text,Button}from 'react-native'

type Props={
    title:String,
    color:String,
    onPress: () =>void //함수 타입 [파라미터x , 리턴 x]
}

class MyComponent5 extends Component<Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                {/* propertys 속성들을 한번에 적용 */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}
export default MyComponent5