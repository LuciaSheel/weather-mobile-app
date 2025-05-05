# WeatherMobileApp

A simple mobile weather application built using Expo and React Native. This app allows users to search for a city and view the current weather along with a forecast, using the OpenWeather API.

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
* A [free OpenWeather API key](https://openweathermap.org/api)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LuciaSheel/WeatherMobileApp.git
   cd WeatherMobileApp
   ```

2. **Create a `.env` file in the project root:**

   ```env
   WEATHER_API_KEY=your_openweather_api_key_here
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npx expo start
   ```

5. **Run on a device:**

   * Use an Android emulator or the Expo Go app on your Android phone.
   * Scan the QR code shown in the terminal or browser.

---

## 🔧 Features

* Search for current weather by city
* View 5-day forecast
* Loading and error handling states

---

## 📱 Compatibility

This app was built using [Expo](https://expo.dev/), which supports both Android and iOS platforms. However:

* ✅ **Tested**: Android (physical device and emulator)
* ⚠️ **Untested**: iOS — while it should work, the app has not been tested on an iOS device or simulator, so behavior may vary.

---

## 🛠️ Built With

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Axios](https://axios-http.com/)
* [OpenWeather API](https://openweathermap.org/api)
* [TypeScript](https://www.typescriptlang.org/)

---

## 🙏 Acknowledgements

This project was built with the support of my instructor, Piyush, who provided valuable direction. Additional help came from ChatGPT, which I used to debug tricky issues, generate boilerplate code, and refine documentation.

Thanks for visiting!

