import { View, Text, ActivityIndicator, Platform, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from './Components/Theme/Theme'
import Homenav from './Screens/HomeNav/Homenav'
import { store } from './Store'
import {enableScreens} from 'react-native-screens';
import Login from './Screens/Login/Login'
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Init} from './Store/actions';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
const RootNavigation = () => {
  const token = useSelector(state => state.Reducers.access);
  console.log(token)
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  React.useEffect(() => {
    enableScreens(true);
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 2000);
    init();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={COLORS.Primary2} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <FlashMessage position="top" />
      {token === null ? <Login /> : <Homenav />}
    </NavigationContainer>
  );
};
export default function App() {
  
  return (
    <Provider store={store}>
      <StatusBar
            barStyle={Platform.OS == 'android' ? 'default' : 'dark-content'}
            backgroundColor={'black'}
          />
      <RootNavigation />
    </Provider>
  )
}