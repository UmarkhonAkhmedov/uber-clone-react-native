import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import tw from "tailwind-react-native-classnames"
import React from 'react';
import NavOptions from '../component/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{uri: "https://links.papareact.com/gzs"}}/>
        <GooglePlacesAutocomplete 
          nearbyPlacesAPI='GooglePlacesSearch' debounce={400} placeholder='Where From?' minLength={2}
          styles={{container: {flex: 0, marginBottom: 60}, textInput: {fontSize: 18}}} enablePoweredByContainer={false}
          query={{ key: GOOGLE_MAPS_APIKEY, language: 'en'}} onPress={(data, details=null)=>{
            
          }} fetchDetails={true}/>
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
