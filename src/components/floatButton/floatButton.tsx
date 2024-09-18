import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

export default function FloatButton() {
  return (
    <TouchableOpacity className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center">
      <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
      <Text className="text-orange-500 font-subtitle">Escrever</Text>
    </TouchableOpacity>
  );
}
