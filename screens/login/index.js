import React, {useState} from 'react';
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
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [maData, setMaData] = useState({});
  const [Spinner, setSpinner] = useState(false);

  const SendData = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    setSpinner(!Spinner);
    fetch(
      'https://asante-web.vercel.app/api/public/users?username=' +
        email +
        '&password=' +
        password,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setSpinner(false);
        // console.log(result);
        setMaData(result);
        console.log('first', maData);
        navigation.navigate('Home', {
          data: maData,
        });
        setSpinner(false);
      })
      .catch(error => console.error(error));
  };

  const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Veillez patienter un moment!!"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      {Loader}
      <ScrollView>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-left.png')} />
          </View>
          <View style={{justifyContent: 'center', marginHorizontal: 5}}>
            <Text style={styles.headerText}>Retour</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/logoCouleur.png')}
            style={styles.logo}
          />
          <Text style={styles.textRegister}>Connectez-vous</Text>
        </View>
        <View style={{margin: 10}}>
          <Input
            placeholder="Email / Numéo de téléphone"
            onChangeText={email => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            secureTextEntry
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
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
          onPress={() => SendData()}
          title="Se connecter"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        <View style={styles.newAccountView}>
          <Text style={styles.confidentialText}>
            Vous n’avez pas de compte ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
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
    top: -10,
  },
  forgotPassText: {
    color: '#1C4ED8',
    fontSize: 14,
  },
  newAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Login;
