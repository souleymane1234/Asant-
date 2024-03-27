import {StyleSheet} from 'react-native';
import {COLORS} from '../../variables/color';

export default StyleSheet.create({
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
