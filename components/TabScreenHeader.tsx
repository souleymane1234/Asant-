import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

// Vector Fonts
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//  Custom Components & Variables
import {COLORS} from '../variables/color';
import {Text} from '@rneui/base';
// import {useNavigation} from '@react-navigation/native';
// import {routes} from '../navigation/routes';
// const headerLogoURL = require('../assets/logo_header.png');

const TabScreenHeader = ({
  right,
  onRightClick,
  style,
  left,
  onLeftClick,
  rightIcon,
  sideBar,
}) => {
  //   const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback>
        <Text>image</Text>
      </TouchableWithoutFeedback>
      {right && (
        <TouchableOpacity style={styles.headerRight} onPress={onRightClick}>
          <Icon name={rightIcon} size={20} color={COLORS.white} />
        </TouchableOpacity>
      )}
      {left && !sideBar && (
        <TouchableOpacity style={styles.headerLeft} onPress={onLeftClick}>
          <Icon name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
      {sideBar && (
        <TouchableOpacity style={styles.headerLeft}>
          <Icon name="menu" size={24} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerLeft: {
    position: 'absolute',
    left: '2%',
  },
  headerRight: {
    position: 'absolute',
    right: '6%',
  },
});

export default TabScreenHeader;
