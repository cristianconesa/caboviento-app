import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const CustomModal: React.FC<Props> = ({ visible, onClose, children, title }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/80 justify-center items-center">
        <View className="w-full h-full bg-surface rounded-t-2xl p-6 pt-12">
          <TouchableOpacity onPress={onClose} className="absolute top-6 right-6 z-10">
            <Text className="text-3xl text-primary font-bold">×</Text>
          </TouchableOpacity>
          {title && <Text className="text-text text-xl font-bold mb-4 text-center">{title}</Text>}
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
