import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface CreateTripFormProps {
  date: string;
  onCreate: (trip: { title: string; cupos: number; hora: string }) => void;
  onCancel: () => void;
}

/**
 * Formulario simple para crear un viaje (mock)
 * - En el futuro, validar y enviar a backend
 */
const CreateTripForm: React.FC<CreateTripFormProps> = ({ date, onCreate, onCancel }) => {
  const [title, setTitle] = useState('');
  const [cupos, setCupos] = useState('');
  const [hora, setHora] = useState('');

  return (
    <View style={tw`p-4`}> 
      <Text style={tw`text-white text-lg font-bold mb-2`}>Nuevo viaje para {date}</Text>
      <TextInput
        style={tw`bg-gray-800 text-white rounded p-2 mb-2`}
        placeholder="Título"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={tw`bg-gray-800 text-white rounded p-2 mb-2`}
        placeholder="Cupos"
        placeholderTextColor="#aaa"
        value={cupos}
        onChangeText={setCupos}
        keyboardType="numeric"
      />
      <TextInput
        style={tw`bg-gray-800 text-white rounded p-2 mb-4`}
        placeholder="Hora (ej: 15:00)"
        placeholderTextColor="#aaa"
        value={hora}
        onChangeText={setHora}
      />
      <View style={tw`flex-row justify-between`}> 
        <TouchableOpacity
          style={tw`bg-[#00e676] px-4 py-2 rounded`}
          onPress={() => onCreate({ title, cupos: Number(cupos), hora })}
          disabled={!title || !cupos || !hora}
        >
          <Text style={tw`text-black font-bold`}>Crear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-700 px-4 py-2 rounded`}
          onPress={onCancel}
        >
          <Text style={tw`text-white`}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTripForm;
