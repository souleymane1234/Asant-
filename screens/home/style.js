import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../variables/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screen = Dimensions.get('window');

export default StyleSheet.create({
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
