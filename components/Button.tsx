import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {COLORS} from '../variables/color';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Components

const Button = ({
  title,
  style,
  textStyle,
  onPress,
  icon1,
  icon2,
  icon1Color,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icon name={icon1} pack="material" size={22} color={icon1Color} />
      <Text style={[styles.text, textStyle]} numberOfLines={1}>
        {title}
      </Text>
      <FontAwesome name={icon2} size={20} color={COLORS.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    flex: 1,
    height: 23,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default Button;
