const initialState = {
    access: null,
    students: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          access: action.payload,
        };
        case 'STUDENTS':
        return {
          ...state,
          students: action.payload,
        };
      
      default:
        return state;
    }
  };