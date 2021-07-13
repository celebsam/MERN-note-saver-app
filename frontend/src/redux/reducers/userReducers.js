export const userLoginReducer = (state = {}, action) => {
   if (action.type === "USER_LOGIN_REQUEST") {
      return { loading: true };
   } else if (action.type === "USER_LOGIN_SUCCESS") {
      return { loading: false, userInfo: action.payload };
   } else if (action.type === "USER_LOGIN_FAIL") {
      return { loading: false, error: action.payload };
   } else if (action.type === "USER_LOGOUT") {
      return {};
   } else {
      return state;
   }
};

export const userRegisterReducer = (state = {}, action) => {
   if (action.type === "USER_REGISTER_REQUEST") {
      return { loading: true };
   } else if (action.type === "USER_REGISTER_SUCCESS") {
      return { loading: false, userInfo: action.payload };
   } else if (action.type === "USER_REGISTER_FAIL") {
      return { loading: false, error: action.payload };
   } else {
      return state;
   }
};
