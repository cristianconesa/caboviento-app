
import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomCalendar from '../components/Calendar';
// TODO: Integrar hooks de usuario, idioma, backend, etc. usando contextos o props
import CustomModal from '../components/CustomModal';
import TripCard from '../components/TripCard';
import { useTrips } from '../hooks/useTrips';
import CreateTripForm from '../components/CreateTripForm';

// Tipado de props de navegación para esta pantalla
type RootStackParamList = {
  Home: undefined;
  RideDetail: { rideId: number };
  // ...otras rutas
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Props de la pantalla (pueden agregarse más en el futuro)
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  // usuario, idioma, etc. pueden venir por contexto o props
}

// Tipos de datos para viajes (reutilizable y exportable)
export type Trip = { id: number; title: string; cupos: number; hora: string };
export type TripsByDate = Record<string, Trip[]>;


// Hook para obtener viajes (simulado, reemplazar por backend en el futuro)
// eslint-disable-next-line react-hooks/rules-of-hooks
const useTripsData = useTrips;

/**
 * Pantalla principal (Home)
 * - Muestra calendario y viajes del día seleccionado
 * - Navegación a detalle de viaje
 * - TODO: Integrar hooks de usuario, idioma, backend, loading, error, etc.
 * - Se recomienda usar useMemo/useCallback para optimizar listas grandes
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { trips, loading, error } = useTripsData();
  // Estado local para viajes creados (mock, hasta conectar backend)
  const [localTrips, setLocalTrips] = useState<TripsByDate>({});
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Maneja selección de día en el calendario (puede optimizarse con useCallback)
  const handleDayPress = (day: any) => {
    setSelectedDay(day.dateString);
    setModalVisible(true);
  };

  // Navega al detalle de viaje
  const goToRideDetail = (rideId: number) => {
    navigation.navigate('RideDetail', { rideId });
  };

  // Unir viajes del backend y locales (mock)
  const allTrips = useMemo(() => {
    const merged: TripsByDate = { ...trips };
    Object.entries(localTrips).forEach(([date, arr]) => {
      merged[date] = [...(merged[date] || []), ...arr];
    });
    return merged;
  }, [trips, localTrips]);

  // Fechas marcadas en el calendario (puede venir de backend)
  const markedDates = useMemo(() => {
    const acc: any = {};
    Object.keys(allTrips).forEach(date => {
      acc[date] = { marked: true, dotColor: '#00e676' };
    });
    if (selectedDay) acc[selectedDay] = { ...acc[selectedDay], selected: true, selectedColor: '#00e676' };
    // Deshabilitar días pasados
    const today = new Date();
    for (let d = new Date(today.getFullYear(), today.getMonth(), 1); d < today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      acc[dateStr] = { ...(acc[dateStr] || {}), disabled: true, disableTouchEvent: true };
    }
    return acc;
  }, [allTrips, selectedDay]);

  return (
    <View style={[tw`flex-1 bg-black p-4 pt-10`]}> 
      {/* Frase principal (puede venir de traducción/i18n) */}
      <Text style={tw`text-white text-2xl font-bold mb-4 text-center`}>
        ¡Bienvenido a CaboViento!
      </Text>
      {/* Calendario minimalista (componente reutilizable) */}
      <CustomCalendar onDayPress={handleDayPress} markedDates={markedDates} />
      {/* Botón para crear viaje (visible si hay día seleccionado) */}
      {selectedDay && (
        <Text
          style={tw`text-[#00e676] text-center my-2 underline`}
          onPress={() => setShowCreateModal(true)}
        >
          + Crear viaje para {selectedDay}
        </Text>
      )}
      {/* Loading y error */}
      {loading && <Text style={tw`text-gray-400 text-center mt-4`}>Cargando viajes...</Text>}
      {error && <Text style={tw`text-red-500 text-center mt-4`}>{error}</Text>}
      {/* Modal con viajes del día seleccionado */}
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title={selectedDay ? `Viajes para ${selectedDay}` : ''}
      >
        {/* Lista de viajes del día (puede optimizarse con FlatList si hay muchos) */}
        {selectedDay && allTrips[selectedDay] ? (
          allTrips[selectedDay].map((trip: Trip) => (
            <TripCard key={trip.id} trip={trip} onPressDetail={goToRideDetail} />
          ))
        ) : (
          <Text style={tw`text-gray-400 text-center`}>No hay viajes para este día.</Text>
        )}
      </CustomModal>

      {/* Modal para crear viaje */}
      <CustomModal
        visible={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title={`Nuevo viaje para ${selectedDay || ''}`}
      >
        {selectedDay && (
          <CreateTripForm
            date={selectedDay}
            onCreate={trip => {
              setLocalTrips(prev => ({
                ...prev,
                [selectedDay]: [...(prev[selectedDay] || []), { ...trip, id: Date.now() }],
              }));
              setShowCreateModal(false);
            }}
            onCancel={() => setShowCreateModal(false)}
          />
        )}
      </CustomModal>
    </View>
  );
};

export default HomeScreen;
