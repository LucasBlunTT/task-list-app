import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AddTaskProps extends TouchableOpacityProps {}

export function AddTask({ ...rest }: AddTaskProps) {
  return (
    <TouchableOpacity
      className="p-4 bg-[#E2EBFA] rounded-2xl flex-row items-center justify-center"
      activeOpacity={0.3}
      {...rest}
    >
      <MaterialIcons name="add" size={20} color={'#0760FB'} />
      <Text className="text-sm text-[#0760FB] font-bold">New Task</Text>
    </TouchableOpacity>
  );
}
