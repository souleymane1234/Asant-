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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Setting = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <View style={{margin: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.black}}>
          Réglages
        </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Line />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: COLORS.button.principal,
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/reglage/run.png')}
                style={{width: 45, height: 45, alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Type de sport
              </Text>
              <Text style={{fontSize: 12}}>Course á pied</Text>
            </View>
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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: 'f2f2f2',
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/reglage/streinght.png')}
                style={{width: 45, height: 45, alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Entrainement
              </Text>
              <Text style={{fontSize: 12}}>Choisir un entrainement</Text>
            </View>
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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: 'f2f2f2',
                borderRadius: 40,
              }}>
              <Image
                source={require('../../assets/reglage/Music.png')}
                style={{width: 45, height: 45, alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Musique
              </Text>
              <Text style={{fontSize: 12}}>Choisir un lecteur de musique</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={require('../../assets/chevron-right.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <Line />
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/reglage/position.png')}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 15}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Distance
              </Text>
            </View>
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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/reglage/timer.png')}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 15}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Time
              </Text>
            </View>
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
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../../assets/reglage/fire.png')}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View style={{justifyContent: 'center', marginHorizontal: 15}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Calories
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={require('../../assets/chevron-right.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <Line />
      </View>
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
});

export default Setting;
