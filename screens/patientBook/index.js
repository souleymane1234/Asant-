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
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const PatientBook = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.header}>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-left.png')} />
          </View>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={styles.headerText}>Retour</Text>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: COLORS.button.principal,
                borderRadius: 20,
                width: 37,
                height: 37,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: COLORS.button.principal,
                  borderRadius: 20,
                  width: 35,
                  height: 35,
                  borderWidth: 2,
                  borderColor: COLORS.white,
                  alignSelf: 'center',
                }}>
                <Icon
                  size={25}
                  name="account"
                  pack="material"
                  color={COLORS.white}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </View>
            <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
              <Text style={{fontSize: 12, color: COLORS.gray}}>
                Lesman Tatiana
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}>
            <Icon
              size={25}
              name="qrcode-scan"
              pack="material"
              color={COLORS.black}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 20, color: COLORS.black}}>
            Carnet de Tatiana
          </Text>
        </View>
        {/* <ImageBackground
          source={require('../../assets/tatianacarnet.png')}
          resizeMode="cover"
          style={[styles.image]}></ImageBackground> */}
        <Image
          style={[styles.image]}
          source={require('../../assets/tatianacarnet.png')}
        />
        {/* mettre l'image */}
        <View style={{margin: 10}}>
          <Text style={{color: COLORS.black, fontSize: 20, marginBottom: 10}}>
            Document de santé
          </Text>
          <Text style={{color: COLORS.gray, fontSize: 12}}>
            Pour faciliter le suivi de vos soins, vos professionnels de santé
            peuvent consulter vos documents.
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{color: COLORS.black, fontSize: 18, fontWeight: 'bold'}}>
              Mes consultations
            </Text>
          </View>
          <TouchableOpacity>
            <Text>Voir plus</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
            marginBottom: 20,
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('VaccineCome')}>
          <View style={{justifyContent: 'center', margin: 10}}>
            <Image
              style={{width: 60, height: 60, borderRadius: 50}}
              source={require('../../assets/profil.jpeg')}
            />
          </View>
          <View style={{marginHorizontal: 10, margin: 10}}>
            <TouchableOpacity
              style={{backgroundColor: '#FFC85F69', borderRadius: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                Prévu
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              Docteur Kobenan
            </Text>
            <Text>Clinique ste famille</Text>
            <Text>8/02/2024 - 10H30</Text>
          </View>
        </TouchableOpacity>
        {/* carousel  */}
        <Text
          style={{
            color: COLORS.black,
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10,
          }}>
          Documentation
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 0.5,
          }}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/document.png')}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.gray,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Arrêt de travail
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.gray,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                04/02/2024
              </Text>
              <Text
                style={{fontSize: 11, color: COLORS.gray, fontWeight: 'bold'}}>
                Par Docteur Gabriel Konan
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', margin: 10}}>
            <View
              style={{
                backgroundColor: COLORS.certificatMedicaleColor,
                height: 20,
                width: 145,
                justifyContent: 'center',
                borderRadius: 21,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: COLORS.black,
                  fontWeight: 'bold',
                }}>
                Certificats médicaux{' '}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 0.5,
          }}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/document.png')}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.gray,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Arrêt de travail
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.gray,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                04/02/2024
              </Text>
              <Text
                style={{fontSize: 11, color: COLORS.gray, fontWeight: 'bold'}}>
                Par Docteur Gabriel Konan
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', margin: 10}}>
            <View
              style={{
                backgroundColor: COLORS.certificatMedicaleColor,
                height: 20,
                width: 145,
                justifyContent: 'center',
                borderRadius: 21,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  color: COLORS.black,
                  fontWeight: 'bold',
                }}>
                Certificats médicaux{' '}
              </Text>
            </View>
          </View>
        </View>
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
    color: COLORS.black,
  },
  image: {
    justifyContent: 'center',
    top: -10,
    width: '100%',
    resizeMode: 'contain',
    height: 200,
  },
});

export default PatientBook;
