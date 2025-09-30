import { useEffect, useState } from 'react';
import type { TripsByDate } from '../screens/HomeScreen';

/**
 * Hook simulado para obtener viajes por fecha
 * En el futuro, reemplazar fetchTrips por llamada real a backend/API
 */
export function useTrips() {
  const [trips, setTrips] = useState<TripsByDate>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simular fetch con timeout
    setLoading(true);
    setTimeout(() => {
      try {
        setTrips({
          '2025-09-30': [
            { id: 1, title: 'Viaje a la playa', cupos: 3, hora: '10:00' },
            { id: 2, title: 'Kite Sunset', cupos: 2, hora: '18:00' },
          ],
          '2025-10-01': [
            { id: 3, title: 'Downwind', cupos: 4, hora: '15:00' },
          ],
        });
        setLoading(false);
      } catch (e) {
        setError('Error al cargar los viajes');
        setLoading(false);
      }
    }, 700); // Simula retardo de red
  }, []);

  return { trips, loading, error };
}
