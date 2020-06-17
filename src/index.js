import React from 'react';
import {YellowBox} from 'react-native';

import Routes from './routes';

// Ignora algumas mensagens de alerta
// Precisarão ser tratadas posteriormente
YellowBox.ignoreWarnings([
  // 'Warning: componentWillUpdate is deprecated', // Navigation da tela Home
  // 'Warning: componentWillReceiveProps is deprecated', // Modal da tela de Login
  'We found non-serializable values in the navigation state',
]);

export default function App() {
  return <Routes />;
}
