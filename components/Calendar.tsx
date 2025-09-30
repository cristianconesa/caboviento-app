
import React from 'react';
import { Calendar } from 'react-native-calendars';
import type { DateData } from 'react-native-calendars';
import { View } from 'react-native';


// Props para el calendario, permite extender funcionalidades
interface Props {
  onDayPress: (day: DateData) => void;
  markedDates?: { [date: string]: any };
  // TODO: Agregar props para deshabilitar días, loading, etc.
}


/**
 * Calendario minimalista reutilizable
 * - Permite marcar días, personalizar tema y eventos
 * - TODO: Agregar loading, deshabilitar días pasados, etc.
 */
const CustomCalendar: React.FC<Props> = ({ onDayPress, markedDates }) => {
  return (
  <View style={require('twrnc').default`rounded-lg overflow-hidden bg-gray-900 p-2`}>
      {/* Componente Calendar de react-native-calendars */}
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: '#222831',
          calendarBackground: '#222831',
          textSectionTitleColor: '#aaaaaa',
          selectedDayBackgroundColor: '#00e676',
          selectedDayTextColor: '#111111',
          todayTextColor: '#00e676',
          dayTextColor: '#eeeeee',
          textDisabledColor: '#393e46',
          monthTextColor: '#eeeeee',
          arrowColor: '#00e676',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        disableAllTouchEventsForDisabledDays
        hideExtraDays
        firstDay={1}
        enableSwipeMonths
      />
    </View>
  );
};

export default CustomCalendar;
