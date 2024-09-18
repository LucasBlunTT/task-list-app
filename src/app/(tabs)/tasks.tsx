import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardTask from '@/components/cardTask/cardTask';
import { AddTask } from '@/components/addTask/addTask';
import { arrayTasks, Task } from '@/utils/arrayTasks';

export default function Tasks() {
  // Corrigido para começar com letra maiúscula (boas práticas)
  const [dataToday, setDataToday] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(arrayTasks);

    const date = new Date();
    const days = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];
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

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];

    const formattedDate = `${dayName}, ${day} de ${monthName}`;
    setDataToday(formattedDate);
  }, []);

  return (
    <View className="flex-1 bg-white pt-14 p-4 justify-between">
      {/* Header */}
      <View className="items-center justify-center mb-4">
        <Text className="text-2xl font-bold">Today's Task</Text>
        <Text className="text-slate-400">{dataToday}</Text>
      </View>

      {/* Body */}
      <View className="w-full items-center justify-center">
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <CardTask
              key={item.id}
              taskName={item.taskName}
              taskTime={item.taskTime}
              complete={item.completo}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Define um espaçamento vertical
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 60, // Adiciona um espaçamento inferior para evitar que o último item seja escondido
          }} // Centraliza os itens
        />
      </View>

      {/* Card ADD Tasks */}
      <AddTask />
    </View>
  );
}
