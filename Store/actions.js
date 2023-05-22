import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosIns, { baseURL } from "../Helper/Helper";

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
  export const GetstudentAction = () => {
    return async dispatch => {
      const response = await axiosIns.get(baseURL + '/api/user/getallstudents/');
      console.log(response.data)
      dispatch({
        type: 'STUDENTS',
        payload: response.data,
      })
    }
  }
  export const LogoutAction = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        token = null;
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }