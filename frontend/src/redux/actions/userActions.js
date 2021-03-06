import axios from "axios";

export const login = (email, password) => async (dispatch) => {
   try {
      dispatch({ type: "USER_LOGIN_REQUEST" });
      const config = {
         headers: {
            "Content-type": "application/json",
         },
      };
      const { data } = await axios.post(
         "/api/users/login",
         { email, password },
         config
      );

      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
   } catch (error) {
      console.log(error);
      dispatch({
         type: "USER_LOGIN_FAIL",
         payload: error?.response?.data?.message,
      });
   }
};

export const logout = () => (dispatch) => {
   localStorage.removeItem("userInfo");
   dispatch({ type: "USER_LOGOUT" });
};

export const register = (name, email, password, pic) => async (dispatch) => {
   try {
      dispatch({ type: "USER_REGISTER_REQUEST" });
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      const { data } = await axios.post(
         "/api/users",
         { name, email, password, pic },
         config
      );

      dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
   } catch (error) {
      dispatch({
         type: "USER_REGISTER_FAIL",
         payload: error.response.data.message,
      });
   }
};
