/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//React Native 는 화면의 구성요소는 :component 라고 정의 함 
AppRegistry.registerComponent(appName, () => App);
