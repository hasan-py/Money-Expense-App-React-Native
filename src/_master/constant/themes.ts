import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const SIZES = {
  h1: 24,
  h2: 20,
  h3: 18,
  p1: 16,
  p2: 14,
  p3: 10,
  width,
  height,
};
export const COLORS = {
  primary: '#4c8d74',
  modalUnderBgColor: '#121E4499',
  disabled: '#63636333',
};

const appTheme = {COLORS, SIZES};

export default appTheme;
