import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosIns from "../Helper/Helper";

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('access');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
  }
}

export const LoginAction = (token) => {
    return async dispatch => {
      if (token) {
        await AsyncStorage.setItem('access', token);
      }
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }