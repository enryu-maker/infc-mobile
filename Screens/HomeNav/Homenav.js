import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import { COLORS, FONTS, SIZES } from '../../Components/Theme/Theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawercontent from './DrawerNav';
import Scan from '../Home/Scan';
import Upload from '../Home/Upload';
import Add from '../Home/Add';
import Single from '../Home/AddScreen/Single';
import Multi from '../Home/AddScreen/Multi';
import ScanOp from '../Home/ScanOp';
import StudentInfo from '../Home/StudentInfo';
import Tag from '../Home/Tag';
import { useDispatch } from 'react-redux';
import { GetstudentAction } from '../../Store/actions';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.Primary2,
        drawerActiveTintColor: COLORS.white,
        drawerStyle: [{ backgroundColor: COLORS.transparent }, styles.drawerStyle],
        drawerLabelStyle: [FONTS.h2, { letterSpacing: 2, color: COLORS.black }],
        drawerType: "front",
        overlayColor: "#0d0d0d40",
        backBehavior: "history",
        drawerStatusBarAnimation: "slide",
      }}
      drawerContent={props => <Drawercontent {...props}
      />
      }
    >
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Upload' component={Upload}/>
      <Drawer.Screen name='Add' component={Add}/>
      <Drawer.Screen name='Scan' component={Scan}/>
    </Drawer.Navigator>)
}
export default function Homenav() {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch()
  const init = async () => {
    await dispatch(GetstudentAction());
  };
  React.useEffect(() => {
    init();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          headerShown: false,
          animation: "slide_from_right"
        }
      }}
      initialRouteName={'Draw'}>
      <Stack.Screen name="Draw" component={DrawerNav} />
      <Stack.Screen name="Single" component={Single} />
      <Stack.Screen name="Multi" component={Multi} />
      <Stack.Screen name="Scanop" component={ScanOp} />
      <Stack.Screen name="List" component={StudentInfo} />
      <Stack.Screen name="Tag" component={Tag} />




    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: COLORS.Primary2,
    width: '100%',
  },
})