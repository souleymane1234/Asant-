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

const Register = () => {
  const [sexeChoiceHomme, setSexeChoiceHomme] = React.useState(false);
  const [sexeChoiceFemme, setSexeChoiceFemme] = React.useState(false);
  const [sexeChoiceAutre, setSexeChoiceAutre] = React.useState(false);
  const [myDate, setMyDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState('Date de naissance');

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
          <Text style={styles.textRegister}>Inscrivez-vous</Text>
        </View>
        <View>
          <Input
            placeholder="Nom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Prénom"
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          {sexeChoice}
          <Input
            placeholder="Numéro de téléphone"
            rightIcon={{type: 'font-awesome', name: 'mobile', size: 25}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Email"
            rightIcon={{type: 'font-awesome', name: 'envelope', size: 20}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Mots de passe"
            rightIcon={{type: 'font-awesome', name: 'lock', size: 20}}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Localisation"
            rightIcon={{type: 'font-awesome', name: 'location', size: 20}}
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
