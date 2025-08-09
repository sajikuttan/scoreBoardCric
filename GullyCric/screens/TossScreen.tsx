import React, { useState } from 'react';
import { View, Text, Button, Animated } from 'react-native';

const TossScreen = () => {
  const [tossResult, setTossResult] = useState<string | null>(null);
  const [animationValue] = useState(new Animated.Value(0));

  const handleToss = () => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setTossResult(result);
    startAnimation();
  };

  const startAnimation = () => {
    animationValue.setValue(0);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Animation completed
    });
  };

  const animatedStyle = {
    transform: [
      {
        rotate: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl mb-4">Toss Screen</Text>
      <Animated.View style={animatedStyle}>
        <Text className="text-4xl">{tossResult ? tossResult : 'Flip the Coin!'}</Text>
      </Animated.View>
      <Button title="Toss" onPress={handleToss} />
    </View>
  );
};

export default TossScreen;