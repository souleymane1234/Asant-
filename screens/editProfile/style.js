import {StyleSheet} from 'react-native';
import {COLORS} from '../../variables/color';

export default StyleSheet.create({
  // Footer
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    margin: 10,
  },
  headerTextView: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  headerText: {
    marginHorizontal: 5,
    color: '#000',
  },
  headerLogo: {
    width: 60,
    height: 60,
  },
  changeImageButton: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconView: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    borderRadius: 20,
    top: '19%',
    marginHorizontal: -20,
  },
  imageSubtitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonViewStyle: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    top: -10,
  },
  buttonStyle: {
    backgroundColor: COLORS.button.principal,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5,
  },
});
