import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const fondo = require('./assets/images/fondo.jpg')

const App = () => {
    return (
        <View
            style={{
                flexDirection: 'col',
                textAlign: 'center',
                textAlignVertical: 'auto',
                flex: 1,
            }}>
                <StatusBar style = 'auto'/>
            <View style = {{backgroundColor:'lightblue', flex:5}}>Flex 5</View>
            <View style = {{backgroundColor:'peachpuff', flex:2}}>Flex 2</View>
            <ImageBackground
                source = {fondo}
                resizeMode="cover"
                style = {styles.backgruondImage}>
              <Text style = {styles.text}>Texto Texto Texto</Text>
            </ImageBackground>
            
        </View>
    );
};

const styles = StyleSheet.create({


})

export default App;
