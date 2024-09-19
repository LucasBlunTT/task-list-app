import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CardTask from '@/components/cardTask/cardTask';
import { AddTask } from '@/components/addTask/addTask';
import { arrayTasks, Task } from '@/utils/arrayTasks';

export default function Tasks() {
  const [dataToday, setDataToday] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState('');

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
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 30,
          }}
        />
      </View>

      {/* Card ADD Tasks */}
      <AddTask onPress={() => setOpenModal(true)} />

      {/* Modal */}
      <Modal
        visible={openModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setOpenModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/60">
          <View className="items-center bg-white p-8 rounded-2xl w-11/12">
            <View className="w-full items-center">
              <Text className="text-2xl font-bold text-gray-800 mb-4">
                Adicionar Nova Tarefa
              </Text>
              <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Digite sua tarefa"
                className="border border-gray-300 p-3 rounded-lg w-full"
                autoFocus={true}
                cursorColor={'#000'}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
                setText('');
              }}
              className="mt-4 p-3 bg-blue rounded-lg w-full"
            >
              <Text className="text-white text-center font-bold">
                Adicionar Tarefa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
                setText('');
              }}
              className="mt-2 p-3 bg-red-500 rounded-lg w-full"
            >
              <Text className="text-white text-center font-bold">
                Fechar Modal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
