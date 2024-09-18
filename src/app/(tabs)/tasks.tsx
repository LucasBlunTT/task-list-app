import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function Chat() {
  const [dataToday, setDataToday] = useState('');

  useEffect(() => {
    // Obter a data atual
    const date = new Date();

    // Array com os nomes dos dias da semana
    const days = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];

    // Array com os nomes dos meses
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    // Formatar a data
    const dayName = days[date.getDay()]; // Nome do dia da semana
    const day = date.getDate(); // Dia do mês
    const monthName = months[date.getMonth()]; // Nome do mês

    // Criar uma string formatada
    const formattedDate = `${dayName}, ${day} de ${monthName}`;

    // Atualizar o estado com a data formatada
    setDataToday(formattedDate);
  }, []);

  return (
    <View className="flex-1 bg-white pt-14 p-4 justify-between">
      <View className="items-center justify-center">
        <View className="items-center justify-center">
          <Text className="text-2xl font-bold">Today's Task</Text>
          <Text className="text-slate-400">{dataToday}</Text>
        </View>
      </View>

      <TouchableOpacity
        className="p-4 bg-[#E2EBFA]  rounded-2xl flex-row items-center justify-center"
        activeOpacity={0.3}
      >
        <MaterialIcons name="add" size={20} />
        <Text className="text-sm color-[#0760FB] ">New Task</Text>
      </TouchableOpacity>
    </View>
  );
}
