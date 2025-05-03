import { ExpoConfig } from '@expo/config-types';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config: ExpoConfig = {
  name: "WeatherMobileApp",
  slug: "WeatherMobileApp",
  extra: {
    weatherApiKey: process.env.WEATHER_API_KEY,
  },
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};

export default config;
