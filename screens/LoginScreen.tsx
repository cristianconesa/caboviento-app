import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'TU_EXPO_CLIENT_ID', // Reemplaza por tu client ID de Google
    iosClientId: 'TU_IOS_CLIENT_ID',
    androidClientId: 'TU_ANDROID_CLIENT_ID',
    webClientId: 'TU_WEB_CLIENT_ID',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Revisar si ya hay sesión guardada
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        onLogin(JSON.parse(user));
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${authentication?.accessToken}` },
      })
        .then(res => res.json())
        .then(async userInfo => {
          await AsyncStorage.setItem('user', JSON.stringify(userInfo));
          onLogin(userInfo);
        })
        .catch(() => Alert.alert('Error', 'No se pudo obtener la información de Google.'));
    }
  }, [response]);

  if (loading) return null;

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Text className="text-text text-2xl font-bold mb-8">CaboViento</Text>
      <Button
        title="Iniciar sesión con Google"
        disabled={!request}
        onPress={() => promptAsync()}
        color="#00e676"
      />
    </View>
  );
};

export default LoginScreen;
