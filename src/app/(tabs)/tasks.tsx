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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CleanTask } from '@/components/cleanTask/cleanTask';

interface Task {
  id: string;
  taskName: string;
  taskTime: string;
  completo: boolean;
}

export default function Tasks() {
  const [dataToday, setDataToday] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTime, setTaskTime] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [textName, setTextName] = useState('');
  const [textFilter, setTextFilter] = useState('');

  useEffect(() => {
    getTasks();
    //saveTaskFake();

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

  async function getTasks() {
    const tasksStorage = await AsyncStorage.getItem('@tasks');
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    } else {
      setTasks([]);
    }
  }

  async function saveTask() {
    const newTask = {
      id: String(Math.random()),
      taskName: textName,
      taskTime,
      completo: false,
    };

    const tasksUpdated = [...tasks, newTask];
    setTasks(tasksUpdated);

    await AsyncStorage.setItem('@tasks', JSON.stringify(tasksUpdated));
  }

  // async function saveTaskFake() {
  //   // Gera 10 tarefas fictícias
  //   const fakeTasks = Array.from({ length: 10 }, (_, index) => ({
  //     id: String(Math.random()),
  //     taskName: `Tarefa ${index + 1}`, // Nome fictício da tarefa
  //     taskTime: `12:0${index} PM`, // Tempo fictício
  //     completo: false, // Todas as tarefas começam como não concluídas
  //   }));

  //   // Atualiza o estado com as tarefas fictícias
  //   const tasksUpdated = [...tasks, ...fakeTasks];
  //   setTasks(tasksUpdated);

  //   // Armazena as tarefas no AsyncStorage
  //   await AsyncStorage.setItem('@tasks', JSON.stringify(tasksUpdated));
  // }

  async function getTasksComplete(){

  }

  async function cleanTask() {
    await AsyncStorage.removeItem('@tasks');
    setTasks([]);
    getTasks();
  }

  function filterTasks(textFilter: string) {
    if (textFilter === '') {
      return tasks;
    }

    return tasks.filter((task: Task) =>
      task.taskName.toLowerCase().includes(textFilter.toLowerCase()),
    );
  }

  return (
    <View className="flex-1 bg-white pt-14 p-4 relative">
      {/* Header */}
      <View className="items-center justify-center mb-4">
        <Text className="text-2xl font-bold">Today's Task</Text>
        <Text className="text-slate-400">{dataToday}</Text>
        <TextInput
          placeholder="Pesquisar Tarefas"
          cursorColor={'#000'} // Cor do cursor
          placeholderTextColor="#888" // Cor do texto placeholder
          onChangeText={setTextFilter} // Função para capturar a entrada do usuário
          value={textFilter} // Valor do input
          style={{
            width: '90%', // Largura do input
            borderColor: '#ccc', // Cor da borda
            borderWidth: 1, // Largura da borda
            borderRadius: 8, // Bordas arredondadas
            padding: 5, // Espaçamento interno
            marginTop: 15, // Espaçamento inferior
            backgroundColor: '#f9f9f9', // Cor de fundo
            textAlign: 'center', // Alinhamento do texto
          }}
        />
      </View>

      {/* Body */}
      <View className="w-full items-center justify-center">
        <FlatList
          className="h-[65%]"
          data={filterTasks(textFilter)} // Uso do filtro
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
            paddingBottom: 10,
          }}
        />
      </View>

      {/* Card ADD Tasks */}
      <View className="flex-1 jus">
        <CleanTask onPress={cleanTask} />
        <AddTask onPress={() => setOpenModal(true)} />
      </View>

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
                value={textName}
                onChangeText={setTextName}
                placeholder="Digite sua tarefa"
                className="border border-gray-300 p-3 rounded-lg w-full"
                autoFocus={true}
                cursorColor={'#000'}
                maxLength={37}
              />
              <TextInput
                placeholder="Digite o horário"
                className="border border-gray-300 p-3 rounded-lg w-full mt-4"
                keyboardType="numeric"
                value={taskTime}
                onChangeText={setTaskTime}
                cursorColor={'#000'}
                maxLength={4}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                saveTask();
                setOpenModal(false);
                setTextName('');
                setTaskTime('');
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
                setTextName('');
                setTaskTime('');
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
