import React,{Component} from "react";
import { View ,Text,StyleSheet,Button,Alert} from "react-native";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import MyComponent5 from "./MyComponent5";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


export default class MainComponent extends Component{
    render(): JSX.Element {
        return(
            //1.나만의 Component 만들어서 사용 
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent 사용 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            //이런식으로 Header , body,Nav 등을 영역별로 나누어 작성할수 있음

            // 2.가만보니 글씨가 똑같은 . "Hello sam"
        //     <View style={style.root}>
        //     <Text>Hello RN</Text>

        //     {/* MyComponent 사용 */}
        //     <MyComponent2 name="sam"></MyComponent2>
        //     <MyComponent2 name="robin"></MyComponent2>
        // </View>

        //3.별도의 .tsx 파일에 ㄷ나만의 컴포넌트를 만들고 사용해보기
        //     <View style={style.root}>
        //     <Text>Hello RN</Text>
        //     {/* MyComponent3 */}
        //     <MyComponent3 aaa={this.clickBtn} title='press'></MyComponent3>
        //     <MyComponent3 aaa={this.clickBtn2} title='click'></MyComponent3>
        // </View>
            
        // <View style={style.root}>
        // <Text>Hello RN</Text>
            
        // {/* MyComponent4번 사용 */}
        //         <MyComponent4></MyComponent4>
        //         <MyComponent4 title='press'></MyComponent4>
        //         <MyComponent4 title='click' color='green'></MyComponent4>
        // </View>
        //     )

        //5. 여러 속성을 한번에 적용시키기
        // <View style={style.root}>
        // <Text>Hello RN</Text>
            
        // {/* MyComponent5 사용 */}
        // <MyComponent5 title='click me' color='indigo' onPress={(()=>Alert.alert("click btn"))}></MyComponent5>
                    
        // </View>
        //6. 컴ㅂ포넌트간의 데이터 제어
         <View style={style.root}>
             <ComponentA msg={this.state.message}></ComponentA>
             <ComponentB onPress={this.changeMessage}></ComponentB>

         </View>
            
      )
 }

    state={
        message:"Hello world"
    }
    changeMessage = ()=>{
        this.setState({message:"Nice too meetyou"})
    }
   

    clickBtn = ()=>{
        Alert.alert('Button click')
    }
    clickBtn2 =()=>{
        Alert.alert('button2 click')
    }
}//MainComponent class..



// 2. Custom Component 에 속성(property)값을 전달 
// Mycomponent2의 속성(property) 값들의 타입 지정
type Props={
    name:String,
}

//속성으로 전달될 값들의 타입을 <>으로 지정
class MyComponent2 extends Component<Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                {/* 컴포넌트를 사용할떄 속성 (property)으로 전달된 값은 컴포넌트의 아주 특별한 멤버변수(props)에 자동으로 추가됨 */}
                <Text style={{marginBottom:8 ,color:'black'}}>{this.props.name}</Text>
                <Button title="click me"></Button>
            </View>
        )
    }
}

//1.Custom Compnent 만들기 
class MyComponent extends Component{
    render(): React.JSX.Element {
        return(
            <View style={{margin:16}}>
                <Text style={{marginBottom:8 ,color:'black'}}>Hello Sam</Text>
                <Button title="click me"></Button>
            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{flex:1},
})