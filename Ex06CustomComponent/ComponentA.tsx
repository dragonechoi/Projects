import React,{Component} from "react";
import {View,Text} from 'react-native'

type Props={
    msg:String
}

export default class ComponentA extends Component<Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:8}}>
                <Text style={{color:'black'}}>{this.props.msg}</Text>
            </View>
        )
    }
}