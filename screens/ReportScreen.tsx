import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

// Props para futuras extensiones (navegación, hooks, etc)
interface ReportScreenProps {
  // navigation?: any;
  // usuario?: User;
}

/**
 * Pantalla de denuncias
 * - Formulario simple para reportar incidentes
 * - TODO: Integrar lógica de envío, hooks, backend, loading, error, etc.
 * - Sugerido: separar en componentes como ReportForm, ReportSuccess, etc.
 */
const ReportScreen: React.FC<ReportScreenProps> = () => {
  // TODO: Manejar estado del formulario, loading, error, éxito, etc.
  return (
    <View style={tw`flex-1 bg-black justify-center items-center`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>Denuncias</Text>
      {/* Aquí irá la UI y lógica del formulario de denuncias */}
      {/* <ReportForm ... /> */}
      {/* <ReportSuccess ... /> */}
      <Text style={tw`text-gray-400`}>Próximamente: formulario de denuncia.</Text>
    </View>
  );
};

export default ReportScreen;
