import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

// Props para futuras extensiones (navegación, chatId, hooks, etc)
interface MessagesScreenProps {
  // navigation?: any;
  // chatId?: string;
  // usuario?: User;
}

/**
 * Pantalla de mensajes grupales por viaje
 * - Muestra chat, botón solicitar, etc.
 * - TODO: Integrar lógica de chat, hooks, backend, loading, error, etc.
 * - Sugerido: separar en componentes como ChatList, MessageInput, RequestButton, etc.
 */
const MessagesScreen: React.FC<MessagesScreenProps> = () => {
  // TODO: Obtener mensajes y usuario desde contexto/hook
  // TODO: Manejar loading, error, envío de mensajes, etc.
  return (
    <View style={tw`flex-1 bg-black justify-center items-center`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>Chat grupal</Text>
      {/* Aquí irá la UI y lógica del chat */}
      {/* <ChatList ... /> */}
      {/* <MessageInput ... /> */}
      {/* <RequestButton ... /> */}
      <Text style={tw`text-gray-400`}>Próximamente: mensajes, botón solicitar, etc.</Text>
    </View>
  );
};

export default MessagesScreen;
