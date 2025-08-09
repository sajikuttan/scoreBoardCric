import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TeamGenerationScreen from '../screens/TeamGenerationScreen';
import TossScreen from '../screens/TossScreen';
import MatchScreen from '../screens/MatchScreen';
import EndInningsScreen from '../screens/EndInningsScreen';
import MatchSummaryScreen from '../screens/MatchSummaryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TeamGeneration" component={TeamGenerationScreen} />
      <Stack.Screen name="Toss" component={TossScreen} />
      <Stack.Screen name="Match" component={MatchScreen} />
      <Stack.Screen name="EndInnings" component={EndInningsScreen} />
      <Stack.Screen name="MatchSummary" component={MatchSummaryScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;