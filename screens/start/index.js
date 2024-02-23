import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from '../../components/Button';
import {COLORS} from '../../variables/color';

const image = require('../../assets/demarage.png');
const Start = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.button.principal} />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logoView}>
          <Text style={styles.textLogo}>Bienvenue sur</Text>
          <Image
            source={require('../../assets/logoBlanc.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            onPress={handleSubmit}
            title="Démarrez l’aventure"
            style={styles.signUpBtn}
            textStyle={styles.signUpBtnTxt}
          />
          <View style={styles.connectView}>
            <Text style={styles.textCompte}>Déjà un compte ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textConnectez}>Connectez vous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpBtn: {
    height: 40,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  buttonView: {
    flex: 1,
  },
  logoView: {
    flex: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textLogo: {
    fontSize: 40,
    color: COLORS.white,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  textCompte: {
    fontSize: 14,
    color: COLORS.white,
  },
  textConnectez: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  connectView: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
  },
});

export default Start;
