import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type CardTaskProps = {
  taskName: string;
  taskTime: string;
  onComplete: () => void;
};

const CardTask = ({ taskName, taskTime, onComplete }: CardTaskProps) => {
  return (
    <View
      className="bg-[#E2EBFA] p-4 rounded-2xl flex-row items-center justify-between"
      style={{ width: '85%' }}
    >
      <View>
        <Text className="text-sm font-bold">{taskName}</Text>
        <Text className="text-xs text-slate-400">{taskTime}</Text>
      </View>
      <TouchableOpacity onPress={onComplete}>
        <MaterialIcons
          name="check-circle"
          size={20}
          color={'#0760FB'}
          className="ml-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardTask;
