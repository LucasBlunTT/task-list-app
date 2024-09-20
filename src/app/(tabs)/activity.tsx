import { View, Text } from 'react-native';
import React from 'react';

export default function Activity() {
  return (
    <View className="flex-1 bg-white pt-14 p-4 items-center justify-center">
      <Text className="color-gray-900 text-lg">
        Não há atividades recentes. ‌
      </Text>
    </View>
  );
}
