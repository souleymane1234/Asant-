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
  Dimensions,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Line from '../../components/Line';
import Button from '../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Setting = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
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
      <View style={{margin: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.black}}>
          Paramètres
        </Text>
      </View>
      <ScrollView>
        <View>
          <Text style={{margin: 10, fontSize: 16, fontWeight: 'bold'}}>
            Paramètre personnels{' '}
          </Text>
          <View
            style={{
              backgroundColor: COLORS.color_profil,
              margin: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}
              onPress={() => navigation.goBack()}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  compte
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/chevron-right.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}
              onPress={() =>
                navigation.navigate('EditProfile', {
                  data: data,
                })
              }>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Modifier mon profil
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/chevron-right.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{margin: 10, fontSize: 16, fontWeight: 'bold'}}>
            Autres paramètres{' '}
          </Text>
          <View
            style={{
              backgroundColor: COLORS.color_profil,
              margin: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Langue
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/chevron-right.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Condition d’utilisation
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/chevron-right.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Politique de confidentialité
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/chevron-right.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{margin: 10, fontSize: 16, fontWeight: 'bold'}}>
            Informations{' '}
          </Text>
          <View
            style={{
              backgroundColor: COLORS.color_profil,
              margin: 10,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Centre d’assistance
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/assistance.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Inviter un ami
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/share.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <Line />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.gris,
                  }}>
                  Notez l’appli Asanté
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/rate.png')}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Se déconnecter"
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
    height: windowHeight,
    width: windowWidth,
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
});

export default Setting;
