import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';

// Core screens
import HomeScreen from './HomeScreen';
import GovernmentAgency from './GovernmentAgencyScreen';
import NDRFScreen from './NDRFScreen';
import PoliceScreen from './PoliceScreen';
import MedicalScreen from './MedicalScreen';
import DonateScreen from './app/DonateScreen';
import EmergencyContacts from './app/EmergencyContacts';
import HelplineNumber from './app/HelplineNumber';
import NDRFreg from './app/NDRFreg';
import Policereg from './app/Policereg';
import CycloneTracker from './app/CycloneTracker';
import NDRFhomescreen from './app/NDRFhomescreen';

// Conditionally import native-only screens
let ShareLocation, PoliceStations;

if (Platform.OS !== 'web') {
  ShareLocation = require('./app/ShareLocation').default;
  PoliceStations = require('./app/PoliceStations').default;
} else {
  // fallback placeholders for web
  ShareLocation = () => null;
  PoliceStations = () => null;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GovernmentAgency" component={GovernmentAgency} />
        <Stack.Screen name="NDRF" component={NDRFScreen} />
        <Stack.Screen name="Police" component={PoliceScreen} />
        <Stack.Screen name="Medical" component={MedicalScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
        <Stack.Screen name="NDRFReg" component={NDRFreg} />
        <Stack.Screen name="PoliceReg" component={Policereg} />
        <Stack.Screen name="Emergency" component={EmergencyContacts} />
        <Stack.Screen name="HelplineNumber" component={HelplineNumber} />
        <Stack.Screen name="CycloneTracker" component={CycloneTracker} />
        <Stack.Screen name="ShareLocation" component={ShareLocation} />
        <Stack.Screen name="PoliceStations" component={PoliceStations} />
        <Stack.Screen name="NDRFhomescreen" component={NDRFhomescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
