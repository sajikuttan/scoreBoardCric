import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EndInningsScreen = () => {
    const navigation = useNavigation();

    const handleEndInnings = () => {
        // Logic to end the current innings and navigate to the next screen
        navigation.navigate('MatchScreen'); // Adjust as necessary
    };

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold mb-4">End Innings</Text>
            <Text className="text-lg mb-8">Are you sure you want to end the current innings?</Text>
            <Button title="End Innings" onPress={handleEndInnings} />
        </View>
    );
};

export default EndInningsScreen;