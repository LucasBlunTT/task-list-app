import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AddTaskProps extends TouchableOpacityProps {}

export function CleanTask({ ...rest }: AddTaskProps) {
  return (
    <TouchableOpacity
      className="p-4 bg-[#E2EBFA] rounded-2xl flex-row items-center justify-center mb-4"
      activeOpacity={0.3}
      {...rest}
    >
      <MaterialIcons name="remove-circle" size={20} color={'#0760FB'} />
      <Text className="text-sm text-[#0760FB] font-bold">Clean Task</Text>
    </TouchableOpacity>
  );
}
