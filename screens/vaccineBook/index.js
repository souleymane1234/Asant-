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
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const VaccineBook = ({navigation, route}) => {
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
        <View style={{margin: 10}}>
          <Text style={{fontSize: 18, color: COLORS.black, fontWeight: 'bold'}}>
            Mon carnet de vaccination
          </Text>
          <Text style={{fontSize: 30, color: COLORS.black, fontWeight: 'bold'}}>
            Bonjour {data?.firstname}
          </Text>
        </View>
        <ImageBackground
          source={require('../../assets/carmetVaccin.png')}
          resizeMode="cover"
          style={[styles.image]}></ImageBackground>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
          onPress={() =>
            navigation.navigate('VaccineCome', {
              data: data,
            })
          }>
          <View>
            <Image
              source={{uri: data?.avatar}}
              style={{width: 80, height: 80, borderRadius: 50}}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text>
              {data?.firstname} {'\n'} Moi
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center',
            }}>
            Membre de la famille
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
          <View>
            <Image
              source={require('../../assets/profil.jpeg')}
              style={{width: 80, height: 80, borderRadius: 50}}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text>Gael {'\n'}Ma fille</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Image
              source={require('../../assets/profil.jpeg')}
              style={{width: 80, height: 80, borderRadius: 50}}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text>Tatiana {'\n'} moi</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    height: 250,
    top: -10,
  },
});

export default VaccineBook;
