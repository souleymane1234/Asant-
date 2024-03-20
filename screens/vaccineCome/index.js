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
import Carousel from 'pinar';

const VaccineCome = ({navigation, route}) => {
  const {data} = route.params;
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
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={styles.headerText}>Retour</Text>
          </View>
        </TouchableOpacity>
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
                {data?.firstname} {data?.lastname}
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
            Carnet de {data?.firstname}
          </Text>
        </View>
        {/* <ImageBackground
          source={require('../../assets/tatianacarnet.png')}
          resizeMode="cover"
          style={[styles.image]}></ImageBackground> */}
        <View style={{flexDirection: 'row', margin: 10}}>
          <View style={{justifyContent: 'flex-end'}}>
            <Text
              style={{color: COLORS.black, fontSize: 18, fontWeight: 'bold'}}>
              Vaccins á venir
            </Text>
          </View>
          <View>
            <Image
              style={[styles.image]}
              source={require('../../assets/Frame.png')}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#F0FDFF'}}>
          <View style={styles.carouselContainer}>
            <Carousel
              style={styles.carousel}
              showsControls={false}
              dotStyle={styles.dotStyle}
              activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
              <TouchableOpacity
                style={{
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
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  width: '90%',
                }}>
                <View style={{marginHorizontal: 10, margin: 10}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FFC85F69',
                      borderRadius: 10,
                      width: 100,
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Recommandée
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#000',
                      marginBottom: 5,
                    }}>
                    Tuberculose
                  </Text>
                  <Text
                    style={{
                      marginBottom: 5,
                    }}>
                    1 ère injection á partir du 04/02/2024
                  </Text>
                  <Text style={{color: '#1E3A8A'}}>Plus de détails</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
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
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  width: '90%',
                }}>
                <View style={{marginHorizontal: 10, margin: 10}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#FFC85F69',
                      borderRadius: 10,
                      width: 100,
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      Recommandée
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#000',
                      marginBottom: 5,
                    }}>
                    Tuberculose
                  </Text>
                  <Text
                    style={{
                      marginBottom: 5,
                    }}>
                    1 ère injection á partir du 04/02/2024
                  </Text>
                  <Text style={{color: '#1E3A8A'}}>Plus de détails</Text>
                </View>
              </TouchableOpacity>
            </Carousel>
          </View>

          <View style={{margin: 10}}>
            <Text
              style={{color: COLORS.black, fontSize: 18, fontWeight: 'bold'}}>
              Mes vaccins effectués
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLORS.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              marginBottom: 2,
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
                  Hépatide B
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
                  style={{
                    fontSize: 11,
                    color: COLORS.gray,
                    fontWeight: 'bold',
                  }}>
                  Par Docteur Gabriel Konan
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLORS.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              marginBottom: 2,
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
                  Poliomyélite
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
                  style={{
                    fontSize: 11,
                    color: COLORS.gray,
                    fontWeight: 'bold',
                  }}>
                  Par Docteur Gabriel Konan
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{flexDirection: 'row', margin: 10}}>
            <Text style={{color: '#1E3A8A', fontSize: 16}}>
              Enregistrer un vaccins
            </Text>
            <Image
              style={{width: 18, height: 18, marginHorizontal: 10}}
              source={require('../../assets/Download.png')}
            />
          </TouchableOpacity>
        </View>

        {/* mettre l'image */}
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
    resizeMode: 'contain',
  },
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  carousel: {
    width: '100%',
  },
  carouselContainer: {
    marginHorizontal: 10,
    height: 150,
  },
});

export default VaccineCome;
