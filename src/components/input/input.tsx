import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons'; // Ícones para uma experiência melhor

const BestInput = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Função simples de validação (exemplo: mínimo de 3 caracteres)
  const validateInput = (input: string | any[]) => {
    if (input.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <View className="p-4">
      <View
        className={`border ${
          isFocused ? 'border-blue-500' : 'border-gray-400'
        } rounded-lg flex-row items-center p-3`}
      >
        <Feather name="edit" size={20} color={isFocused ? 'blue' : 'gray'} />

        <TextInput
          className="flex-1 ml-2 text-gray-800"
          value={text}
          onChangeText={(value) => {
            setText(value);
            validateInput(value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Digite pelo menos 3 caracteres..."
          placeholderTextColor="gray"
          keyboardType="default"
          maxLength={100}
          accessibilityLabel="Campo de texto para inserir uma tarefa"
        />
        {text.length > 0 && (
          <TouchableOpacity onPress={() => setText('')}>
            <Feather name="x-circle" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>

      {!isValid && (
        <Text className="text-red-500 mt-1">
          A entrada deve ter pelo menos 3 caracteres.
        </Text>
      )}
    </View>
  );
};

export default BestInput;
