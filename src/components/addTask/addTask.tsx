import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function AddTask() {
  return (
    <TouchableOpacity
      className="p-4 bg-[#E2EBFA]  rounded-2xl flex-row items-center justify-center"
      activeOpacity={0.3}
    >
      <MaterialIcons name="add" size={20} color={'#0760FB'} />
      <Text className="text-sm color-[#0760FB] font-bold ">New Task</Text>
    </TouchableOpacity>
  );
}
