import { colors } from '@/styles/colors'; // Certifique-se de adicionar as cores desejadas em seu arquivo colors
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white, // Cor de fundo escura da aba
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue, // Cor dos ícones ativos (azul, harmonizando)
        tabBarInactiveTintColor: colors.gray[800], // Cor dos ícones inativos (cinza, harmonizando)
      }}
    >
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="access-time" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
