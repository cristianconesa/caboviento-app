


import React, { useState } from 'react';
import AppNavigator from './navigation';
import { ThemeProvider } from './components/ThemeProvider';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  // Simular usuario logueado temporalmente para navegar la app
  const [user] = useState<any>({ id: 1, name: 'Usuario Demo' });

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
