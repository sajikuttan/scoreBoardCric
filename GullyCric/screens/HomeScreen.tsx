import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const matches = [
    { id: '1', name: 'Match 1' },
    { id: '2', name: 'Match 2' },
    { id: '3', name: 'Match 3' },
  ];

  const createNewMatch = () => {
    navigation.navigate('TeamGeneration');
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold mb-4">GullyCric Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-300">
            <Text className="text-lg">{item.name}</Text>
          </View>
        )}
      />
      <Button title="Create New Match" onPress={createNewMatch} />
    </View>
  );
};

export default HomeScreen;