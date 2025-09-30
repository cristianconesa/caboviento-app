


import React, { useState } from 'react';
import "nativewind/types";
import AppNavigator from './navigation';
import { ThemeProvider } from './components/ThemeProvider';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <ThemeProvider>
      {user ? (
        <AppNavigator />
      ) : (
        <LoginScreen onLogin={setUser} />
      )}
    </ThemeProvider>
  );
}
