import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableHighlight,
  FlatList,
  LogBox,
  Alert,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../variables/color';
import {Input} from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default function EditProfile({route, navigation}) {
  const {data} = route.params;
  const [photo, setPhoto] = useState('');
  const [imageBase64, setImageBase64] = useState(data?.avatar);
  const [nom, setNom] = useState(data?.firstname);
  const [prenom, setPrenom] = useState(data?.lastname);
  const [localisation, setlocalisation] = useState(data?.address);
  const [taille, setTaille] = useState(data?.height);
  const [poids, setPoids] = useState(data?.weight);
  const [Spinner, setSpinner] = React.useState(false);

  const openCamera = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      multiple: true,
      cropping: true,
    }).then(result => {
      setPhoto1(result.path);
    });
  };

  const pickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(result => {
      setPhoto(result.path);
      console.log(photo);
      ImgToBase64.getBase64String(result.path).then(base64String => {
        setImageBase64('data:image/jpeg;base64,' + base64String);
        console.log('base', imageBase64);
      });
    });
  };
  // const myHeaders = new Headers();
  // myHeaders.append('Content-Type', 'application/json');

  // const raw = JSON.stringify({
  //   title: 'Mr',
  //   lastname: 'yoyo',
  // });

  // const requestOptions = {
  //   method: 'PUT',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow',
  // };

  // fetch(
  //   'https://asante-web.vercel.app/api/public/users?username=12341234&password=1234',
  //   requestOptions,
  // )
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.error(error));
  console.log(nom, prenom, localisation, taille, poids, data?.avatar);
  const SendData = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      firstname: nom,
      lastname: prenom,
      address: localisation,
      height: taille,
      weight: poids,
      avatar: imageBase64,
    });

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    setSpinner(!Spinner);
    fetch(
      'https://asante-web.vercel.app/api/public/users?username=12341234&password=1234',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setSpinner(!Spinner);
        if (!result.message) {
          setSpinner(false);
          console.log('modif....', result);
          // navigation.navigate('Home', {
          //   data: result,
          // });
          setSpinner(false);
        } else {
          setSpinner(false);
          Alert.alert(
            'Vous avez mal saisie une donnée, votre email et numero de telephone doivent etre unique',
          );
        }
        console.log('Patience');
      })

      .catch(error => console.error(error));
  };

  const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Votre compte est en cours de création"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {Loader}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-left.png')} />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Retour</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.changeImageButton}
            onPress={() => pickImage()}>
            {imageBase64 ? (
              <Image
                source={{uri: imageBase64}}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
            ) : (
              <Image
                source={require('../../assets/logoSansText.png')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
            )}
            {/* <Image
              source={require('../../assets/logoSansText.png')}
              style={{width: 100, height: 100, borderRadius: 50}}
            /> */}
            <View style={styles.editIconView}>
              <Icon
                style={{alignSelf: 'center'}}
                name="square-edit-outline"
                pack="material"
                size={20}
                // color={'#fff'}
              />
            </View>
          </TouchableOpacity>
          <View style={{}}>
            <Text style={[styles.imageSubtitle, {fontSize: 16}]}>
              {data.firstname} {data.lastname}
            </Text>
            <Text style={[styles.imageSubtitle, {fontSize: 14}]}>
              {data.address}
            </Text>
          </View>
        </View>
        <View style={styles.TextInputSpace}>
          <Input
            placeholder={data.firstname}
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={nom => setNom(nom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder={data.lastname}
            rightIcon={{type: 'font-awesome', name: 'user-o', size: 20}}
            onChangeText={prenom => setPrenom(prenom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder={data.address}
            // rightIcon={{type: 'font-awesome', name: 'lock', size: 20}}
            onChangeText={localisation => setlocalisation(localisation)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Taille"
            // rightIcon={{type: 'font-awesome', name: 'resize', size: 20}}
            onChangeText={taille => setTaille(taille)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Poids"
            // rightIcon={{type: 'font-awesome', name: 'scale', size: 20}}
            onChangeText={poids => setPoids(poids)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
        </View>

        <View style={styles.buttonViewStyle}>
          <TouchableOpacity
            onPress={() => SendData()}
            style={styles.buttonStyle}>
            <Icon
              style={{alignSelf: 'center'}}
              name="check"
              pack="material"
              size={30}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
