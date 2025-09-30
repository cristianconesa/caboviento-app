
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import type { Trip } from '../screens/HomeScreen';

interface TripCardProps {
  trip: Trip;
  onPressDetail?: (id: number) => void;
  // TODO: Agregar props para loading, estado reservado, etc.
}

/**
 * Componente reutilizable para mostrar un viaje en la lista
 * - Optimizado para renderizado rápido
 * - Puede extenderse con memo, animaciones, loading, etc.
 * - TODO: Agregar memoización avanzada si la lista crece
 */

const TripCard: React.FC<TripCardProps> = ({ trip, onPressDetail }) => (
  <View style={tw`mb-4 p-4 bg-gray-800 rounded-lg`}>
    {/* Título del viaje */}
    <Text style={tw`text-white text-lg font-bold`}>{trip.title}</Text>
    {/* Info de cupos y hora */}
    <Text style={tw`text-gray-400`}>Cupos: {trip.cupos} - Hora: {trip.hora}</Text>
    {/* Botón para ver detalle (puede ser reemplazado por TouchableOpacity) */}
    <Text
      style={tw`text-[#00e676] mt-2 underline`}
      onPress={() => onPressDetail && onPressDetail(trip.id)}
    >
      Ver detalle
    </Text>
  </View>
);

export default React.memo(TripCard);
