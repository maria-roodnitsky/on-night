import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  require('../selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

export default CustomIcon;
