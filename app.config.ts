import { ExpoConfig } from '@expo/config-types';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ExpoConfig = {
  name: "WeatherMobileApp",
  slug: "WeatherMobileApp",
  extra: {
    weatherApiKey: process.env.WEATHER_API_KEY,
  },
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    edgeToEdgeEnabled: true,
  },
  web: {},
};

export default config;
