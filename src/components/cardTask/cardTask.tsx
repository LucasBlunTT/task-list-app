import { View, Text } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function CardTask() {
  return (
    <View className="bg-[#E2EBFA] p-4 rounded-2xl flex-row items-center justify-between" style={{width: '85%'}}>
      <View>
        <Text className="text-sm font-bold">Design Meeting</Text>
        <Text className="text-xs text-slate-400">10:00 AM</Text>
      </View>
      <View>
        <MaterialIcons
          name="check-circle"
          size={20}
          color={'#0760FB'}
          className="ml-8"
        />
      </View>
    </View>
  );
}
