import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            pack="material"
            size={20}
            color={COLORS.black}
          />
          <Text style={styles.headerText}>Retour</Text>
        </View>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logoCouleur.png')}
            style={styles.logo}
          />
          <Text style={styles.textRegister}>Connectez-vous</Text>
        </View>
        <View>
          <Input
            placeholder="Email / Numéo de téléphone"
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Mots de passe"
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <TouchableOpacity style={styles.forgotPassButton}>
            <Text style={styles.forgotPassText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Button
          title="Se connecter"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        <View style={styles.newAccountView}>
          <Text style={styles.confidentialText}>
            Vous n’avez pas de compte ?
          </Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}> Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 10,
  },
  header: {
    height: 40,
    flexDirection: 'row',
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  logoView: {
    alignSelf: 'center',
    marginBottom: 50,
    top: 10,
  },
  logo: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 24,
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
  confidentialText: {
    textAlign: 'center',
    fontSize: 14,
  },
  forgotPassButton: {
    margin: 10,
    top: -20,
  },
  forgotPassText: {
    color: '#1C4ED8',
    fontSize: 14,
  },
  newAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default Login;
