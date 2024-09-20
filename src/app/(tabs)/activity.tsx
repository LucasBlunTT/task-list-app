import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CardTaskActivity from '@/components/cardTaskActivity/cardTaskActivity';

export default function Activity() {
  const [tasksCompleted, setTasksCompleted] = useState(true);

  return (
    <View className="flex-1  flex-col bg-white pt-14 p-4 items-center justify-center">
      {tasksCompleted ? (
        <CardTaskActivity
          complete={true}
          taskName="TESTE"
          taskTime="22:22"
          dateTaskComplete="20/09/2024"
        />
      ) : (
        <Text className="color-gray-900 text-lg">
          Não há atividades recentes. ‌
        </Text>
      )}
    </View>
  );
}
