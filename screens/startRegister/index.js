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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const StartRegister = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          pack="material"
          size={20}
          color={COLORS.black}
        />
        <Text style={styles.headerText}>Retour</Text>
      </View>
      <View style={styles.section1}>
        <Image
          source={require('../../assets/svgSartRegister.png')}
          style={styles.imageSection1}
        />
        <Text style={styles.textSection1}>
          Profitez d’une {'\n'} expérience unique
        </Text>
      </View>
      <View style={styles.section2}>
        <Button
          // onPress={navigation.navigate('Register')}
          title="Créez votre compte"
          icon2="envelope-o"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        <View style={styles.viewOuAlors}>
          <View style={styles.line} />
          <View>
            <Text style={styles.ouAlors}>ou alors</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View>
          <Button
            title="S’inscrire avec Apple"
            icon1="apple"
            style={[styles.socialBtn]}
            textStyle={styles.socialBtnTxt}
          />
          <Button
            title="S’inscrire avec Google"
            icon1="google"
            style={[styles.socialBtn]}
            textStyle={styles.socialBtnTxt}
          />
          <Button
            title="S’inscrire avec Facebook"
            icon1="facebook"
            icon1Color={COLORS.white}
            style={[styles.socialBtnFacebook]}
            textStyle={styles.socialBtnsocialBtnFacebookTxt}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 40,
    margin: 10,
    flexDirection: 'row',
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  section1: {
    flex: 1,
  },
  imageSection1: {
    alignSelf: 'center',
  },
  textSection1: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  section2: {
    flex: 1,
  },
  signUpBtn: {
    height: 45,
    borderRadius: 39,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.button.principal,
  },
  signUpBtnTxt: {
    fontSize: 18,
  },
  viewOuAlors: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.black,
  },
  ouAlors: {
    width: 100,
    textAlign: 'center',
    color: COLORS.black,
  },
  socialBtn: {
    height: 45,
    borderRadius: 39,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  socialBtnTxt: {
    fontSize: 18,
    color: COLORS.social.apple_text,
  },
  socialBtnFacebook: {
    height: 45,
    borderRadius: 39,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: COLORS.button.facebook_button,
  },
  socialBtnsocialBtnFacebookTxt: {
    fontSize: 18,
    color: COLORS.white,
  },
});

export default StartRegister;
