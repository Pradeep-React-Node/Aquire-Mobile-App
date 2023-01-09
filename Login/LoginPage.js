import React from 'react'
import { View, Text, ScrollView, Image, SafeAreaView, StatusBar } from 'react-native';
import stylesGlobal from '../CSSClass/CssClass';
import bgimg from "../ImageAsset/dreamers.png";
import { TextInput, Button } from "@react-native-material/core";
import CheckBox from '@react-native-community/checkbox';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function LoginPage() {
  return (
    <SafeAreaView style={stylesGlobal.backgroundStyle}>
      <StatusBar
        barStyle={stylesGlobal.isDarkMode ? 'light-content' : 'dark-content'}

      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={stylesGlobal.backgroundStyle}>
        <View style={stylesGlobal.container}>
          <Image
            style={stylesGlobal.logoCenter}
            source={bgimg}
          />
        </View>
        <View style={stylesGlobal.container}>
          <TextInput label="Email" style={{ marginTop: 30, marginHorizontal: 20, width: "85%" }} />
          <TextInput label="Password" style={{ margin: 0, marginHorizontal: 20, width: "85%" }} />
        </View>
        <View style={stylesGlobal.container}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <CheckBox
              // value={isSelected}
              // onValueChange={setSelection}
              style={{alignSelf: "center"}}
            />
            
            <Text style={{ margin: 8 }}>Do you like React Native?</Text>
          </View>
        </View>
        <Button title="Login" style={{ marginLeft: 20 , width:"25%"}} />

        <Text style={{ marginTop:20, marginLeft: 20 , width:"65%",}} >Don't have an account? Register</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginPage