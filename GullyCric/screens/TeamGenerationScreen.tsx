import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { firestore } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const TeamGenerationScreen = () => {
  const [players, setPlayers] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersCollection = collection(firestore, 'players');
      const playerSnapshot = await getDocs(playersCollection);
      const playerList = playerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlayers(playerList);
    };

    fetchPlayers();
  }, []);

  const handleAddToTeam = (player, team) => {
    if (team === 'A') {
      setTeamA([...teamA, player]);
    } else {
      setTeamB([...teamB, player]);
    }
  };

  const handleRemoveFromTeam = (playerId, team) => {
    if (team === 'A') {
      setTeamA(teamA.filter(player => player.id !== playerId));
    } else {
      setTeamB(teamB.filter(player => player.id !== playerId));
    }
  };

  const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold mb-4">Team Generation</Text>
      <TextInput
        placeholder="Search for players..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        className="border p-2 mb-4"
      />
      <Text className="text-lg font-semibold">Available Players:</Text>
      <FlatList
        data={filteredPlayers}
        keyExtractor={player => player.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mb-2">
            <Text>{item.name}</Text>
            <Button title="Add to Team A" onPress={() => handleAddToTeam(item, 'A')} />
            <Button title="Add to Team B" onPress={() => handleAddToTeam(item, 'B')} />
          </View>
        )}
      />
      <Text className="text-lg font-semibold mt-4">Team A:</Text>
      <FlatList
        data={teamA}
        keyExtractor={player => player.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mb-2">
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => handleRemoveFromTeam(item.id, 'A')} />
          </View>
        )}
      />
      <Text className="text-lg font-semibold mt-4">Team B:</Text>
      <FlatList
        data={teamB}
        keyExtractor={player => player.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center mb-2">
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => handleRemoveFromTeam(item.id, 'B')} />
          </View>
        )}
      />
    </View>
  );
};

export default TeamGenerationScreen;