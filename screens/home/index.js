import React, {useState, useEffect, useRef} from 'react';
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
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';
import ButtonHome from '../../components/ButtonHome';
import Carousel from 'pinar';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../../constants/googleMapKey';
import imagePath from '../../constants/imagePath';
import MapViewDirections from 'react-native-maps-directions';
import Loader from '../../components/Loader';
import {
  locationPermission,
  getCurrentLocation,
} from '../../helper/helperFunction';
import Line from '../../components/Line';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const image = require('../../assets/carte.png');
const Home = ({navigation, route}) => {
  const {data} = route.params;
  console.log('data.........', data);
  const mapRef = useRef();
  const markerRef = useRef();
  const [state, setState] = useState({
    curLoc: {
      latitude: 30.7046,
      longitude: 77.1025,
    },
    destinationCords: {
      latitude: 30.7046,
      longitude: 77.1025,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 30.7046,
      longitude: 77.1025,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const [actualité, setActualité] = useState(false);
  const [santé, setSanté] = useState(false);
  const [activité, setActivité] = useState(true);
  const [historique, setHistorique] = useState(false);
  const [profile, setProfile] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);
  const [maData, setMaData] = useState();

  // function to handle the start button press
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };
  // function to handle the pause button press
  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };
  // function to handle the continue button press
  const handleContinue = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };
  // function to handle the reset button press
  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };
  // calculate the time values for display
  const formatTime = time => {
    const hours = Math.floor(time / 360);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const {
    curLoc,
    time,
    distance,
    destinationCords,
    isLoading,
    coordinate,
    heading,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      console.log('get live location after 4 second', heading);
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const onPressLocation = () => {
    navigation.navigate('chooseLocation', {getCordinates: fetchValue});
  };
  const fetchValue = data => {
    console.log('this is data', data);
    updateState({
      destinationCords: {
        latitude: 5.3183922,
        longitude: -4.0219825,
      },
    });
  };

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const fetchTime = (d, t) => {
    updateState({
      distance: d,
      time: t,
    });
  };

  const images = [
    {
      name: 'exterior',
      img: require('../../assets/fille.png'),
    },
    {
      name: 'kitchen',
      img: require('../../assets/fils.png'),
    },
    {
      name: 'living area',
      img: require('../../assets/photoTatiana.png'),
    },
  ];

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
        <Text></Text>
        <Image
          source={require('../../assets/logoSansText.png')}
          style={styles.logo}
        />
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.navigate('Setting')}>
          <Image
            source={require('../../assets/cog.png')}
            style={[styles.logo]}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
      </View> */}
      <View style={styles.timeView}>
        <Text style={styles.timeText}>{formatTime(timer)}</Text>
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
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 4}}></View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.demarreButton}>
            <Text style={styles.demarreText}>Démarrer</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground> */}
      {distance !== 0 && time !== 0 && (
        <View style={{alignItems: 'center', marginVertical: 16}}>
          <Text>Time left: {time.toFixed(0)} </Text>
          <Text>Distance left: {distance.toFixed(0)}</Text>
        </View>
      )}
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker.Animated ref={markerRef} coordinate={coordinate}>
            <Image
              source={imagePath.position}
              style={{
                width: 40,
                height: 40,
                transform: [{rotate: `${heading}deg`}],
              }}
              resizeMode="contain"
            />
          </Marker.Animated>

          {Object.keys(destinationCords).length > 0 && (
            <Marker
              coordinate={destinationCords}
              image={imagePath.icGreenMarker}
            />
          )}

          {Object.keys(destinationCords).length > 0 && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={'AIzaSyDdaLdxFfrj3yVqi0iMlHqoBPnuhp34c7o'}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`,
                );
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);
                fetchTime(result.distance, result.duration),
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      // right: 30,
                      // bottom: 300,
                      // left: 30,
                      // top: 100,
                    },
                  });
              }}
              onError={errorMessage => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            top: 0,
          }}
          onPress={() => onCenter()}>
          <Image source={imagePath.greenIndicator} />
        </TouchableOpacity>
        {/* {!isActive && !isPaused ? ( */}

        <View style={styles.buttonView}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            bottom: 60,
          }}>
          <TouchableOpacity
            style={styles.demarreButtonStop}
            onPress={handleStart}>
            <Text style={styles.demarreText}>Démarrer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.demarreButtonStop}
            onPress={handlePause}>
            <Text style={styles.demarreText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.demarreButtonStop}
            onPress={handleContinue}>
            <Text style={styles.demarreText}>Continuer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.demarreButtonStop}
            onPress={handleReset}>
            <Text style={styles.demarreText}>Reprendre</Text>
          </TouchableOpacity>
        </View>
      </View>

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
        <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.cartnet.back,
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
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
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.cartnet.back,
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}
              onPress={() => navigation.navigate('VaccineBook')}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: 'bold',
                  margin: 10,
                }}>
                Mon carnet de vaccination
              </Text>
              <Image
                source={require('../../assets/doc1.png')}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </Carousel>
        </View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
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
      <ScrollView>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.title}>Actualité</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/logoSansText.png')}
              style={styles.titleImage}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text style={styles.subtitle}>Sport</Text>
          <Text style={{fontWeight: 'bold', color: COLORS.black}}>
            Restez informé des événements, des résultats en direct, des analyses
            d'experts.
          </Text>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
            <ImageBackground
              source={require('../../assets/actualite/imageSport.png')}
              resizeMode="cover"
              style={[styles.image, {margin: 10, height: 400}]}>
              <View style={{alignSelf: 'center', marginBottom: 10}}>
                <Text
                  style={{
                    color: COLORS.white,
                    textAlign: 'center',
                    fontSize: 10,
                  }}>
                  Découvrez nos plans de courses {'\n'} qui s’adaptent à votre
                  niveau
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}>
                  Commencez {'\n'} à courir
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.button.principal,
                    width: 45,
                    height: 45,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={require('../../assets/actualite/chevronRight.png')}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../../assets/actualite/imageSport.png')}
              resizeMode="cover"
              style={[styles.image, {margin: 10, height: 400}]}>
              <View style={{alignSelf: 'center', marginBottom: 10}}>
                <Text
                  style={{
                    color: COLORS.white,
                    textAlign: 'center',
                    fontSize: 10,
                  }}>
                  Découvrez nos plans de courses {'\n'} qui s’adaptent à votre
                  niveau
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}>
                  Commencez {'\n'} à courir
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.button.principal,
                    width: 45,
                    height: 45,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={require('../../assets/actualite/chevronRight.png')}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </Carousel>
        </View>
        <View style={{margin: 10}}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.subtitle}>Santé</Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.black,
                marginBottom: 10,
              }}>
              Tout savoir sur le traitement et la prévention du cancer du sein
              L’ignorance est suicidaire.
            </Text>
            <Image
              source={require('../../assets/actualite/cancer.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.black,
                marginBottom: 10,
              }}>
              Le cancer de la prostate est une préoccupation majeure de santé
              pour les hommes, (IRM) joue un rôle crucial dans sa gestion
            </Text>
            <Image
              source={require('../../assets/actualite/vih.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View style={{marginBottom: 100}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.black,
                marginBottom: 10,
              }}>
              Le cancer de la prostate est une préoccupation majeure de santé
              pour les hommes, (IRM) joue un rôle crucial dans sa gestion
            </Text>
            <Image
              source={require('../../assets/actualite/test.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
        </View>
      </ScrollView>
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
        <View style={{marginBottom: 20}}>
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
      <ScrollView>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.title}>Profile</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/cog.png')}
              style={styles.titleImage}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            backgroundColor: '#4ABBEC',
            margin: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('VaccineCome')}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Image
                source={require('../../assets/profil.jpeg')}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
            </View>
            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Tatiana
              </Text>
              <Text style={{fontSize: 12, color: COLORS.black}}>Tatiana</Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', margin: 10}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#4ABBEC',
            borderRadius: 10,
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 10}}>
              <Image
                source={require('../../assets/profile/mesure.png')}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: COLORS.black,
                  }}>
                  180 cm
                </Text>
                <Image
                  source={require('../../assets/profile/edit.png')}
                  style={{marginHorizontal: 1, alignSelf: 'center'}}
                />
              </View>
              <Text style={{textAlign: 'center'}}>Taille</Text>
            </View>
            <View style={{margin: 10}}>
              <Image
                source={require('../../assets/profile/tensiometre.png')}
                style={{width: 80, height: 80, alignSelf: 'center'}}
              />
              <View style={{flexDirection: 'row'}}>
                <Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: COLORS.black,
                    }}>
                    120 /
                  </Text>
                  {'\n'}
                  <Text style={{fontSize: 12, textAlign: 'center'}}>SYS</Text>
                </Text>
                <Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: COLORS.black,
                    }}>
                    80 /
                  </Text>
                  {'\n'}
                  <Text style={{fontSize: 12, textAlign: 'center'}}>DIA</Text>
                </Text>
                <Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: COLORS.black,
                    }}>
                    69
                  </Text>
                  {'\n'}
                  <Text style={{fontSize: 12, textAlign: 'center'}}>PULL</Text>
                </Text>
                <Image
                  source={require('../../assets/profile/edit.png')}
                  style={{marginHorizontal: 1, top: 5}}
                />
              </View>
              {/* <Text style={{textAlign: 'center'}}>SYS DIA PULL</Text> */}
            </View>
            <View style={{margin: 10}}>
              <Image
                source={require('../../assets/profile/poids.png')}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: COLORS.black,
                  }}>
                  70 Kg
                </Text>
                <Image
                  source={require('../../assets/profile/edit.png')}
                  style={{marginHorizontal: 1, alignSelf: 'center'}}
                />
              </View>
              <Text style={{textAlign: 'center'}}>Poids</Text>
            </View>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>
              <Text style={{fontSize: 14, color: COLORS.black}}>
                État de santé :
              </Text>
              <Text style={{color: '#1CC700', fontSize: 16}}>Optimale</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'center', color: COLORS.black, fontSize: 12}}>
              Mis à jour depuis le Lun. 08 Janv. 2024
            </Text>
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              marginBottom: 20,
            }}>
            Mes objectifs
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={require('../../assets/profile/medaille.png')}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontSize: 40, alignSelf: 'center'}}>0</Text>
              <Text style={{alignSelf: 'center'}}>
                {' '}
                Objectif terminés {'\n'} Aujourdh'hui
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            margin: 10,
          }}
          onPress={() => navigation.navigate('VaccineCome')}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Image source={require('../../assets/profile/objectif.png')} />
            </View>
            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Créer objectif
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', margin: 10}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              marginBottom: 20,
            }}>
            Mon entrainement
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={require('../../assets/profile/agenda.png')}
                style={{alignSelf: 'center'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{alignSelf: 'center'}}>
                {' '}
                Aucun entraînement {'\n'} Enregisté
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 50,
            margin: 10,
          }}
          onPress={() => navigation.navigate('VaccineCome')}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View>
              <Image source={require('../../assets/profile/run.png')} />
            </View>
            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
                Créer entraînement
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', margin: 10}}>
            <Image source={require('../../assets/chevron-right.png')} />
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
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
    flexDirection: 'center',
    justifyContent: 'space-between',
    margin: 10,
    flex: 1.5,
    alignSelf: 'center',
    width: '100%',
    marginBottom: 10,
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
    width: '80%',
    borderRadius: 34,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 60,
  },
  demarreButtonStop: {
    backgroundColor: COLORS.button.principal,
    width: '20%',
    borderRadius: 34,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
  },
  demarreText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  //   History styles start
  titleImage: {
    // width: 20,
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
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
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  images: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  carousel: {
    height: '100%',
    width: '100%',
  },
  carouselContainer: {
    height: 400,
    marginHorizontal: 10,
  },
});

export default Home;
