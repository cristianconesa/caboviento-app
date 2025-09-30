import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

// Props para futuras extensiones (navegación, hooks, etc)
interface SuggestionsScreenProps {
  // navigation?: any;
  // usuario?: User;
}

/**
 * Pantalla de sugerencias
 * - Formulario simple para sugerencias
 * - TODO: Integrar lógica de envío, hooks, backend, loading, error, etc.
 * - Sugerido: separar en componentes como SuggestionsForm, SuggestionsSuccess, etc.
 */
const SuggestionsScreen: React.FC<SuggestionsScreenProps> = () => {
  // TODO: Manejar estado del formulario, loading, error, éxito, etc.
  return (
    <View style={tw`flex-1 bg-black justify-center items-center`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>Sugerencias</Text>
      {/* Aquí irá la UI y lógica del formulario de sugerencias */}
      {/* <SuggestionsForm ... /> */}
      {/* <SuggestionsSuccess ... /> */}
      <Text style={tw`text-gray-400`}>Próximamente: formulario de sugerencias.</Text>
    </View>
  );
};

export default SuggestionsScreen;
