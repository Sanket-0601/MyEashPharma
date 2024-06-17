// authReducer.js
const initialAuthState = {
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload, isAuthenticated: true };
      case 'LOGOUT':
        return { ...state, user: null, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  