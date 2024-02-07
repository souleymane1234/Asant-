import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import ButtonHome from '../../components/ButtonHome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../../assets/carte.png');
const Home = ({navigation}) => {
  const [actualité, setActualité] = useState(false);
  const [santé, setSanté] = useState(false);
  const [activité, setActivité] = useState(true);
  const [historique, setHistorique] = useState(false);
  const [profile, setProfile] = useState(false);

  const BottomBar = (
    <View
      style={{
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 10,
        zIndex: 2,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flex: 1,
        right: 0,
        left: 0,
      }}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {actualité == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setActualité(false);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="newspaper-variant-multiple-outline"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Actualité</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setActualité(true);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="newspaper-variant-multiple-outline"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Actualité</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {santé == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setActualité(true);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="heart-pulse"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Santé</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setActualité(false);
              setSanté(true);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="heart-pulse"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Santé</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {activité == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setActualité(true);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="radioactive-off"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Activités</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setActualité(false);
              setSanté(false);
              setActivité(true);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="radioactive-off"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Activités</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {historique == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setActualité(true);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="history"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Historique</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setActualité(false);
              setSanté(false);
              setActivité(false);
              setHistorique(true);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="history"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Historique</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {profile == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setActualité(true);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(false);
            }}>
            <Icon
              size={20}
              name="account-circle-outline"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Profile</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setActualité(false);
              setSanté(false);
              setActivité(false);
              setHistorique(false);
              setProfile(true);
            }}>
            <Icon
              size={20}
              name="account-circle-outline"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
  const Activity = (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}>
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/logoSansText.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.timeView}>
        <Text style={styles.timeText}>00:00:00</Text>
        <Text style={styles.timeSousText}>Durée</Text>
      </View>
      <View style={styles.resultViewGlobal}>
        <View style={styles.resultDistanceView}>
          <Text style={styles.nombreDistance}>0,00</Text>
          <Text style={styles.textDistance}>Distance (km)</Text>
        </View>
        <View style={styles.resultCaloriesView}>
          <Text style={styles.nombreCalories}>0</Text>
          <Text style={styles.textCalories}>Calories (kcal)</Text>
        </View>
        <View style={styles.resultRythmeView}>
          <Text style={styles.nombreCalories}>00:00</Text>
          <Text style={styles.textRythme}>Rythme moy. (min/km)</Text>
        </View>
      </View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 4}}></View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="music"
              pack="material"
              size={30}
              color={COLORS.white}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.demarreButton}>
            <Text style={styles.demarreText}>Démarrer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="cog"
              pack="material"
              size={30}
              color={COLORS.white}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* <View style={styles.logoView}>
        <Image source={require('../../assets/carte.png')} style={styles.logo} />
      </View> */}
    </View>
  );

  const Health = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.title}>Santé</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logoSansText.png')}
              style={styles.titleImage}
            />
          </View>
        </View>
        <ImageBackground
          source={require('../../assets/Rectangle.png')}
          resizeMode="cover"
          style={[styles.image, {margin: 10}]}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Icon
                size={20}
                name="newspaper-variant-multiple-outline"
                pack="material"
                color={COLORS.white}
              />
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={{color: COLORS.white}}>Préparation</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/Controle.png')}
            style={{alignSelf: 'center', margin: 10}}
          />
          <View style={{alignSelf: 'center', marginBottom: 10}}>
            <Text
              style={{
                color: COLORS.white,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Comment te sens-tu aujourd’hui?
            </Text>
            <Text
              style={{color: COLORS.white, textAlign: 'center', fontSize: 12}}>
              Prenez une mesure pour obtenir votre score de préparation pour la
              journée.
            </Text>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.cartnet.back,
            margin: 10,
            borderRadius: 15,
            height: 47,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{margin: 10, justifyContent: 'center'}}>
            <Text
              style={{fontSize: 14, color: COLORS.black, fontWeight: 'bold'}}>
              Définissez votre objectif santé
            </Text>
          </View>
          <View style={{margin: 10, justifyContent: 'center'}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.cartnet.back,
            margin: 10,
            borderRadius: 15,
            marginBottom: 80,
          }}
          onPress={() => navigation.navigate('HealthBook')}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.black,
              fontWeight: 'bold',
              margin: 10,
            }}>
            Mon carnet de santé
          </Text>
          <Image
            source={require('../../assets/doc1.png')}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        {/* <View style={{backgroundColor: '#000'}}>
          <Image
            source={require('../../assets/Controle.png')}
            style={{width: '98%', alignSelf: 'center', margin: 10}}
          />
        </View> */}
      </ScrollView>
    </View>
  );

  const Actuality = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <Text>Sport</Text>
    </View>
  );

  const History = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.title}>Historique</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logoSansText.png')}
              style={styles.titleImage}
            />
          </View>
        </View>

        {/* section 1 start  */}
        <View style={styles.section1View}>
          <TouchableOpacity style={styles.selectSection1Button}>
            <Text style={styles.selectSectionText}>Mois</Text>
            <View style={styles.selectSectionIconView}>
              <Image source={require('../../assets/chevron-down.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectSection1Button}>
            <Text style={styles.selectSectionText}>Toutes les activité</Text>
            <View style={styles.selectSectionIconView}>
              <Image source={require('../../assets/chevron-down.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dateSelectView}>
          <Text style={styles.dateSelectText}>Janvier 2024</Text>
          <Text style={{fontSize: 12}}>3,35 km • 1 activité </Text>
        </View>
        <View style={styles.distanceView}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.imageRunningView}>
              <Image
                source={require('../../assets/iconrunning.png')}
                style={styles.imageRunningSize}
              />
            </View>
            <TouchableOpacity style={styles.distanceButton}>
              <Text style={styles.distanceText}>3,35 km</Text>
              <Text style={{fontSize: 10}}>00:45:29</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{marginBottom: 10}}>
            <View style={styles.imageRunningView}>
              <Image
                source={require('../../assets/locationIcon.png')}
                style={{alignSelf: 'flex-end'}}
              />
            </View>
            <Text style={{fontSize: 10}}>05 jan. 2024</Text>
          </TouchableOpacity>
        </View>
        {/* section 1 end  */}
        <View style={{height: 40}}></View>
        <View>
          <Text style={styles.statText}>Statistiques</Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={styles.statCard}>
            <Text style={styles.distanceStatCard}>
              Distance (km) - 7 derniers jours
            </Text>
            <Image
              source={require('../../assets/successIcon.png')}
              style={styles.successImageSize}
            />
            <View style={styles.bottomTextStatCard}>
              <View>
                <Text style={styles.titleBottomTextStatCard}>1</Text>
                <Text style={styles.sizeBottomTextStatCard}>Activités </Text>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleBottomTextStatCard}>45</Text>
                  <Text style={styles.sizeMinAndKmBottomTextStatCard}>min</Text>
                </View>
                <Text style={styles.sizeBottomTextStatCard}>Durée </Text>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleBottomTextStatCard}>3,5</Text>
                  <Text style={styles.sizeMinAndKmBottomTextStatCard}>km</Text>
                </View>
                <Text style={styles.sizeBottomTextStatCard}>Distance </Text>
              </View>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.distanceStatCard}>
              Calories perdus - 7 derniers jours
            </Text>
            <Image
              source={require('../../assets/iconFlame.png')}
              style={styles.successImageSize}
            />
            <View
              style={{
                margin: 10,
              }}>
              <View style={styles.rowAndCenter}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>20</Text>
                <Text style={styles.sizeMinAndKmBottomTextStatCard}>cal</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.statText}>Records</Text>
          <View style={[styles.rowAndBetween, {margin: 10}]}>
            <View style={{width: '80%'}}>
              <Text style={{fontSize: 10, textAlign: 'justify'}}>
                <Text style={{fontWeight: 'bold'}}>
                  Débloquer les records avec votre application Asanté{'\n'}
                </Text>
                <Text>
                  Obtenez un badge pour chacun de vos nouveaux records !{'\n'}Et
                  montrez á vos amis que vous êtes un challenger...
                </Text>
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Image source={require('../../assets/chevron-right.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  const Profil = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View>
        <Text>profil</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#fff" />
      <View style={{height: windowHeight}}>
        {activité && Activity}
        <View style={{}}>
          <View
            style={[
              {
                backgroundColor: null,
                borderRadius: null,
                width: windowWidth,
                height: windowHeight,
              },
            ]}>
            {santé && Health}
            {actualité && Actuality}
            {historique && History}
            {profile && Profil}
          </View>
        </View>
      </View>
      {BottomBar}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: COLORS.white,
  },
  bottomBarIconActif: {
    alignSelf: 'center',
    color: COLORS.button.principal,
  },
  BottomBarTextActif: {
    color: COLORS.button.principal,
    fontSize: 10,
    textAlign: 'center',
  },
  bottomBarIconNoActif: {
    alignSelf: 'center',
    color: COLORS.black,
  },
  BottomBarTextNoActif: {
    color: COLORS.black,
    fontSize: 10,
  },
  logoView: {
    alignSelf: 'center',
    top: 10,
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  timeView: {
    alignSelf: 'center',
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  timeSousText: {
    textAlign: 'center',
    fontSize: 12,
  },
  resultViewGlobal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  nombreDistance: {
    alignSelf: 'center',
    color: COLORS.black,
    fontSize: 34,
    fontWeight: 'bold',
  },
  textDistance: {
    alignSelf: 'center',
    fontSize: 10,
  },
  nombreCalories: {
    alignSelf: 'center',
    color: COLORS.black,
    fontSize: 34,
    fontWeight: 'bold',
  },
  textCalories: {
    alignSelf: 'center',
    fontSize: 10,
  },
  textRythme: {
    alignSelf: 'center',
    fontSize: 10,
  },
  resultCaloriesView: {
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpBtn: {
    height: 50,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.button.principal,
    zIndex: 2,
    position: 'absolute',
    flex: 1,
    bottom: 50,
  },
  signUpBtnTxt: {
    fontSize: 18,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    flex: 1,
  },
  iconButton: {
    backgroundColor: COLORS.button.principal,
    width: '15%',
    borderRadius: 34,
    height: 50,
    justifyContent: 'center',
  },
  demarreButton: {
    backgroundColor: COLORS.button.principal,
    width: '65%',
    borderRadius: 34,
    height: 50,
    justifyContent: 'center',
  },
  demarreText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  //   History styles start
  titleImage: {
    width: 20,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  section1View: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  selectSection1Button: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  selectSectionText: {
    fontSize: 14,
  },
  selectSectionIconView: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  dateSelectView: {
    margin: 10,
    top: 10,
    marginBottom: 20,
  },
  dateSelectText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  distanceView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  imageRunningView: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  imageRunningSize: {
    width: 20,
    height: 20,
  },
  distanceButton: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  statText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    margin: 10,
  },
  statCard: {
    backgroundColor: '#fff',
    width: '45%',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  distanceStatCard: {
    marginBottom: 30,
    margin: 10,
    fontSize: 8,
  },
  successImageSize: {
    alignSelf: 'center',
    marginBottom: 30,
    margin: 10,
  },
  bottomTextStatCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  titleBottomTextStatCard: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeBottomTextStatCard: {
    fontSize: 8,
  },
  sizeMinAndKmBottomTextStatCard: {
    fontSize: 8,
    fontWeight: 'bold',
    top: 12,
  },
  rowAndCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowAndBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
