import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import {HTMLContent} from './Webmap.js'; 

const SplashPageContent = () => {
  return (
    <View>
      <Text style={styles.text}>Splash Page</Text>
    </View>
  );
}


const MapPageContent = () => {
  console.log("hello world");
  return (
    <WebView
      originWhitelist={['*']}
      javaScriptEnabledAndroid={true}
      style={styles.container}
      source={{ html: HTMLContent}}
    />
  );
}

export default function App() {
  const [name, setName] = React.useState('Liam');
  const [content, setContent] = React.useState(
    (
      <SplashPageContent />
    )
  );

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar   
        backgroundColor = "#b3e6ff"  
        barStyle = "dark-content"   
        hidden = {false}    
        translucent = {true}   
      />
      <View style={styles.body}>
        <MapPageContent/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    marginTop : StatusBar.currentHeight,
  }
});
