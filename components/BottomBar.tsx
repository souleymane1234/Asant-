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
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomSheet} from '@rneui/themed';
import {CategorieComponent} from '../../Components/categorieComponent';
import {categorieData} from '../../Donnee/categorieData';
import {ProductCardComponent} from '../../Components/productCardComponent';
import {productCardDonData} from '../../Donnee/productCardDon';
import {productCardTrocData} from '../../Donnee/productCardTrocData';
import BottomSheetComponent from '../../Components/Bottomsheet';
import {Test} from '../../Components/test';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen: React.FunctionComponent<BottomSheetComponentProps> = ({
  navigation,
  route,
}) => {
  const {id, Token, Data} = route.params;
  const [home, setHome] = useState(true);
  const [evenement, setEvenement] = useState(false);
  const [cinema, setCinema] = useState(false);
  const [sport, setSport] = useState(false);
  const [profil, setProfil] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dashModalVisible, setDashModalVisible] = useState(false);
  const [profilModalVisible, setProfilModalVisible] = useState(false);
  const [filtreModalVisible, setFiltreModalVisible] = useState(false);
  const [isVisibleBottomCreate, setIsVisibleBottomCreate] = useState(false);
  const [categorie, setCategorie] = useState(false);
  const [exclusivite, setExclusivite] = useState(false);
  const [etat, setEtat] = useState(false);
  const [demande, setDemande] = useState(false);
  const [modeFemme, setModeFemme] = useState(false);
  const [allData, setAllData] = useState();
  const [img, setImg] = useState();

  // console.log('first', Data);
const BottomBar = ({
  title,
  style,
  textStyle,
  onPress,
  icon1,
  icon2,
  icon1Color,
}) => {
  return (
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
        {home == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Accueil</Text>
            {/* <Text style={[styles.TextIcon, {color: "#1c78ef", fontWeight: "bold"}]}>Home</Text> */}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Icon
              size={25}
              name="home"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Accueil</Text>
            {/* <Text style={[styles.TextIcon, {color: "#f2f2f2"}]}>Home</Text> */}
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {evenement == true ? (
          <TouchableOpacity
            style={styles.footerCartContainer}
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../Assets/filterOrange.png')}
            />
            <Text style={styles.BottomBarTextActif}>Filtrer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(true);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../Assets/filterBlue.png')}
            />
            <Text style={styles.BottomBarTextNoActif}>Filtrer</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {sport == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}
            style={{
              backgroundColor: '#fff',
              top: -10,
              width: 50,
              height: 50,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Icon
              size={35}
              name="plus"
              pack="material"
              style={[
                styles.bottomBarIconNoActif,
                {
                  top: 5,
                  backgroundColor: '#fa9936',
                  borderRadius: 20,
                  color: '#fff',
                },
              ]}
            />
            <Text style={styles.BottomBarTextActif}>Publiez</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              // setSport(true);
              setProfil(false);
              setModalVisible(true);
            }}
            style={{
              backgroundColor: '#fff',
              top: -10,
              width: 50,
              height: 50,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Icon
              size={35}
              name="plus"
              pack="material"
              style={[
                styles.bottomBarIconNoActif,
                {
                  top: 5,
                  backgroundColor: '#030d4e',
                  borderRadius: 20,
                  color: '#fff',
                },
              ]}
            />
            <Text style={[styles.BottomBarTextNoActif, {top: 4}]}>Publiez</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {cinema == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Icon
              size={25}
              name="chat"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Message</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(true);
              setSport(false);
              setProfil(false);
            }}>
            <Icon
              size={25}
              name="chat"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Message</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
        {profil == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(false);
            }}>
            <Icon
              size={25}
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconActif}
            />
            <Text style={styles.BottomBarTextActif}>Profil</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setEvenement(false);
              setCinema(false);
              setSport(false);
              setProfil(true);
            }}>
            <Icon
              size={25}
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
            <Text style={styles.BottomBarTextNoActif}>Profil</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#f3f3f3',
  },
});

export default HomeScreen;
