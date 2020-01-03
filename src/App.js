import React, { Component } from 'react';
import './App.css';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,  // 상태바 색상 조절을 위해 import
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  AsyncStorage
} from "react-native";
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <Movie />
      <MoviePoster />

      {/* // #6 볼 차례입니다 */}
    </div>
  );
}
 
class MoviePoster extends Component {
  render() {
    return(
      <img src="https://namu.wiki/w/%ED%97%9D%EA%B1%B0%20%EA%B2%8C%EC%9E%84:%20%EB%8D%94%20%ED%8C%8C%EC%9D%B4%EB%84%90" />
    );
  }
}
export default App;
