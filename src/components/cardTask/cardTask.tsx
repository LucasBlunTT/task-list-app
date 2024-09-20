import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type CardTaskProps = {
  taskName?: string;
  taskTime?: string;
  complete?: boolean;
};

const CardTask = ({ taskName, taskTime, complete }: CardTaskProps) => {
  const [check, setCheck] = useState(complete);

  // Cria uma referência de opacidade inicial
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Efeito para iniciar a animação de fade-in
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidade final
      duration: 500, // Duração da animação em milissegundos
      useNativeDriver: true, // Otimização da performance
    }).start();
  }, [fadeAnim]);

  return (
    // Substitui View por Animated.View para aplicar a animação
    <Animated.View
      style={{
        opacity: fadeAnim, // Aplica a opacidade animada
        width: '85%',
      }}
      className="bg-[#E2EBFA] p-4 rounded-2xl flex-row items-center justify-between"
    >
      <View className="justify-center items-center w-[90%]">
        <Text
          className={`${
            check ? 'line-through' : 'no-underline'
          } text-sm font-bold text-center`}
        >
          {taskName}
        </Text>
        <Text className="text-xs text-slate-400 text-center">{taskTime}</Text>
      </View>
      <TouchableOpacity onPress={() => setCheck(!check)}>
        <MaterialIcons
          name={check ? 'check-box' : 'check-box-outline-blank'}
          size={20}
          color={'#0760FB'}
          className="ml-8"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CardTask;
