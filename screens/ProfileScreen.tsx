import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

// Props para futuras extensiones (usuario, hooks, navegación, etc)
interface ProfileScreenProps {
  // navigation?: any;
  // user?: User;
  // idioma?: string;
}

/**
 * Pantalla de perfil de usuario
 * - Muestra imagen, nombre, edad, sexo
 * - TODO: Integrar edición de perfil, hooks, backend, loading, error, etc.
 * - Sugerido: separar en componentes como ProfileHeader, ProfileForm, etc.
 */
const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  // TODO: Obtener datos de usuario desde contexto/hook
  // TODO: Manejar loading, error, edición, etc.
  return (
    <View style={tw`flex-1 bg-black justify-center items-center`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>Perfil de Usuario</Text>
      {/* Aquí irá la UI y lógica del perfil */}
      {/* <ProfileHeader ... /> */}
      {/* <ProfileForm ... /> */}
      <Text style={tw`text-gray-400`}>Próximamente: datos de usuario, imagen, etc.</Text>
    </View>
  );
};

export default ProfileScreen;
