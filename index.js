/**
 * @format
 */
import './gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import ScreenNavigation from './src/navigations';

AppRegistry.registerComponent(appName, () => ScreenNavigation);
