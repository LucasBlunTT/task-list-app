import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type CardTaskProps = {
  taskName?: string;
  taskTime?: string;
  complete?: boolean;
};

const CardTask = ({ taskName, taskTime, complete }: CardTaskProps) => {
  const [check, setCheck] = useState(complete);

  return (
    <View
      className="bg-[#E2EBFA] p-4 rounded-2xl flex-row items-center justify-between"
      style={{ width: '85%' }}
    >
      <View>
        <Text
          className={`${
            check ? 'line-through' : 'no-underline'
          } text-sm font-bold`}
        >
          {taskName}
        </Text>
        <Text className="text-xs text-slate-400">{taskTime}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons
          name={check ? 'check-box' : 'check-box-outline-blank'}
          size={20}
          color={'#0760FB'}
          className="ml-8"
          onPress={() => setCheck(!check)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardTask;
