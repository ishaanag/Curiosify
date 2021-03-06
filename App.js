import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OnboardingScreen from "./screens/OnboardingScreen";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import PreferencesScreen from "./screens/PreferencesScreen";
import InterestsScreen from "./screens/InterestsScreen";
import SearchScreen from "./screens/SearchScreen";
import TopicsInterestsScreen from "./screens/TopicsInterestsScreen";
const MainNavigator = createStackNavigator({
  Onboarding: { screen: OnboardingScreen },
  PersonalInfo: { screen: PersonalInfoScreen },
  Preferences: { screen: PreferencesScreen },
  Interests: { screen: InterestsScreen },
  Search: { screen: SearchScreen },
  TopicsInterests: { screen: TopicsInterestsScreen }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });


const App = createAppContainer(MainNavigator);

export default App;


