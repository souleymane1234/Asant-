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
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = ({navigation}) => {
  const [sexeChoiceHomme, setSexeChoiceHomme] = React.useState(false);
  const [sexeChoiceFemme, setSexeChoiceFemme] = React.useState(false);
  const [sexeChoiceAutre, setSexeChoiceAutre] = React.useState(false);
  const [myDate, setMyDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState('Date de naissance');
  // data state
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [photo, setPhoto] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || myDate;
    setShow(Platform.OS === 'ios');
    setMyDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate();
    '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear() +
      setText(fDate);
    console.log(fDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const sexeChoice = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View>
        {sexeChoiceHomme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
            }}>
            <Text style={styles.sexeChoiceTextActif}>Homme</Text>
            <View style={[styles.sexeLineActif, {width: 65}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Homme</Text>
            <View style={[styles.sexeLineNoActif, {width: 65}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceFemme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
            }}>
            <Text style={styles.sexeChoiceTextActif}>Femme</Text>
            <View style={[styles.sexeLineActif, {width: 65}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(true);
              setSexeChoiceAutre(false);
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Femme</Text>
            <View style={[styles.sexeLineNoActif, {width: 65}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceAutre == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
            }}>
            <Text style={styles.sexeChoiceTextActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineActif, {width: 150}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(true);
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineNoActif, {width: 150}]}></View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const SendData = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      avatar:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB1ZlNchJREMe7ewbEMmXhIla5IycQTiAskiJmobmBnsDcgOQGcgIrJ5BVQskCPEG4QcjKKmNVpjSRGOC13UMNgfA1g8A8fwuYmo+af3VP93vv/xAWJP/5PJ1KbWTRhTcAmAHELAGkmTmt1xHRY4YWA3to+Ksx0KjubjZgQRAiUjy9zKs4QnoXiAr9MhUPXOn8MeXa3vNmpGfD3tgXiCV5IA9LgAEa3O28r+6+aIW5f65QTfGTjaclicQBrAAG/Nh26ahReObNum+m0OLptwwlknVgzsAqQWyZzl1hVnRp2oXXX75nnUTybOUiFXmHBmRb3jntlokRVZFITj1qsSwBr8OmUNsZL7QxoWtL93Q80+3kHn4GI6nXwolZpOJryNevRrI5IlSrO2aRfUTD464pDZ8apN5PuZs4B4swXS4Eo9kgougmPoFl6AAzONYfrXJAOgMLCaLajyjRB7AUdPCt/68/e7UfVzL2rrtnhsX77TpbVKxd5i0WqaRTt90skVnObGiVaPqJCV+B5bDOBQjQ5rT7kEMvpeotGInmIZMjsryQAtIE/wkkjdQD+/GIZWUIliPrqhbJhxpp2RoP7IlQuADLUQODDHIFLEddFkq5btPygvL8aV5FFv7iER2DrSD4Gff7qM3pV59K/32h1e3NhnpBYBmqKTDT6P4kH4FlqIkWHA+EalTleyiDJUjdlIdNiJGxPuk4h8zYgphRDe2bX4fD50aE+h2gd1eIs12pSNXQ2N8a0TA2e9JwsxhV8YhFD6G3P8l+nDjNOxE3TcWu9zOQyRH3Cic7ky3zuUYuOsk64mpXAUG6FzJyFX3wUYJyq+wGWt3tm5+5eV5+hM0Gia74U0vdbJDe7bfFEETevlGfSl5ygOjI/lJUR1r3nnrHMlmvhBU4eBL+AXVZ1MBQbwD7y+7MvXgRhSBVzE025kLF3V5fNx+2nbD8BV7qRLqRANQnAAAAAElFTkSuQmCC',
      title: 'Mme',
      firstname: 'SuperAdmins',
      lastname: 'AdminAdmins',
      phone: '0102030401',
      email: 'azz@gmail.com',
      password: '01020304',
      address: 'cocody',
      birthday: '2024/10/10',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch('https://asante-web.vercel.app/api/public/users', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.error(error));

    // fetch('https://trocplus.ci/api/login', requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //     navigation.navigate('HomeScreen', {
    //       Id: result.user.id,
    //       Token: result.token,
    //       Data: result,
    //     });
    //   })
    //   .catch(error => console.log('mon erreur de connexion', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
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
          <Text style={styles.textRegister}>Inscrivez-vous</Text>
        </View>
        <View style={{margin: 10}}>
          <Input
            placeholder="Nom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={nom => setEmail(nom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Prénom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={prenom => setEmail(prenom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          {sexeChoice}
          <Input
            placeholder="Numéro de téléphone"
            rightIcon={{type: 'font-awesome', name: 'mobile', size: 25}}
            onChangeText={numero => setEmail(numero)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Email"
            rightIcon={{type: 'font-awesome', name: 'envelope', size: 20}}
            onChangeText={email => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Mots de passe"
            rightIcon={{type: 'font-awesome', name: 'lock', size: 20}}
            onChangeText={password => setEmail(password)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Localisation"
            rightIcon={{type: 'font-awesome', name: 'lock', size: 20}}
            onChangeText={adresse => setEmail(adresse)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <TouchableOpacity
            onPress={() => showMode('date')}
            style={styles.birthButton}>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={myDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <View style={styles.birthView}>
              <Text style={styles.birthText}>{text}</Text>
              <Icon
                name="cake"
                pack="material"
                size={20}
                color={COLORS.black}
              />
            </View>
            <View style={styles.birthLine}></View>
          </TouchableOpacity>
          <View style={{marginBottom: 10}}>
            <Text style={styles.addMediaText}>Ajouter photo de profil</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.selectMediaButton}>
                <Text style={styles.selectMediaText}>Choisir un fichier</Text>
              </TouchableOpacity>
              <View style={{justifyContent: 'center'}}>
                <Text style={{marginHorizontal: 10}}>
                  Aucun fichier sélectionné
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.confidentialText}>
            En adhérant, vous acceptez les conditions générales et confirmez que
            vous avez lu et compris la déclaration de confidentialité.
          </Text>
        </View>
        <Button
          onPress={() => SendData()}
          title="S’inscrire"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
      </ScrollView>
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
  },
  logo: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 24,
  },
  sexeChoiceTextActif: {
    color: COLORS.button.principal,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  sexeChoiceTextNoActif: {
    color: COLORS.input_border_color,
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  sexeLineActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.button.principal,
  },
  sexeLineNoActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  birthButton: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  birthView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthText: {
    marginBottom: 10,
  },
  birthLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  addMediaText: {
    marginBottom: 10,
  },
  selectMediaButton: {
    borderRadius: 53,
    borderWidth: 1,
    borderColor: '#1C4ED8',
    width: '40%',
    justifyContent: 'center',
    height: 30,
  },
  selectMediaText: {
    color: '#1C4ED8',
    textAlign: 'center',
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
    fontSize: 10,
  },
});

export default Register;
