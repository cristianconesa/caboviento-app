import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import tw from 'twrnc';

// Tipado de props de navegación para esta pantalla
type RootStackParamList = {
  RideDetail: { rideId: number };
  // ...otras rutas
};
type RideDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RideDetail'>;

interface RideDetailScreenProps {
  navigation: RideDetailScreenNavigationProp;
  route: { params: { rideId: number } };
  // usuario, idioma, hooks, etc. pueden venir por contexto o props
}

/**
 * Pantalla de detalle de viaje
 * - Muestra info del viaje, creador, cupos, horarios, historial
 * - TODO: Integrar lógica de edición, hooks, backend, loading, error, etc.
 * - Sugerido: separar en componentes como RideInfo, RideHistory, EditButton, etc.
 */
const RideDetailScreen: React.FC<RideDetailScreenProps> = ({ route }) => {
  const { rideId } = route.params;
  // TODO: Obtener datos reales del viaje usando rideId (hook personalizado o contexto)
  // TODO: Manejar loading, error, permisos de edición, etc.
  return (
    <View style={tw`flex-1 bg-black justify-center items-center`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>Detalle del Viaje #{rideId}</Text>
      {/* Aquí irá la UI y lógica del detalle del viaje */}
      {/* <RideInfo ... /> */}
      {/* <RideHistory ... /> */}
      {/* <EditButton ... /> (solo para el creador) */}
      <Text style={tw`text-gray-400`}>Próximamente: info del viaje, cupos, historial, etc.</Text>
    </View>
  );
};

export default RideDetailScreen;
