import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../firebase/firebaseConfig';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';

const MatchScreen = () => {
  const navigation = useNavigation();
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [ballRecords, setBallRecords] = useState([]);

  const handleAddBall = () => {
    const newBall = { runs, wickets, overs };
    setBallRecords([...ballRecords, newBall]);
    setRuns(0);
    setWickets(0);
  };

  const handleSaveMatch = async () => {
    try {
      await addDoc(collection(firestore, 'matches'), {
        ballRecords,
        totalRuns: ballRecords.reduce((acc, ball) => acc + ball.runs, 0),
        totalWickets: ballRecords.reduce((acc, ball) => acc + ball.wickets, 0),
        overs: ballRecords.length,
      });
      navigation.navigate('MatchSummaryScreen');
    } catch (error) {
      console.error("Error saving match: ", error);
    }
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold">Live Scoring</Text>
      <TextInput
        placeholder="Runs"
        keyboardType="numeric"
        value={runs.toString()}
        onChangeText={text => setRuns(Number(text))}
        className="border p-2 my-2"
      />
      <TextInput
        placeholder="Wickets"
        keyboardType="numeric"
        value={wickets.toString()}
        onChangeText={text => setWickets(Number(text))}
        className="border p-2 my-2"
      />
      <Button title="Add Ball" onPress={handleAddBall} />
      <FlatList
        data={ballRecords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`Runs: ${item.runs}, Wickets: ${item.wickets}, Overs: ${item.overs}`}</Text>
        )}
      />
      <Button title="Save Match" onPress={handleSaveMatch} />
    </View>
  );
};

export default MatchScreen;