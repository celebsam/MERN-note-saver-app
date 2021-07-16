import axios from "axios";

export const listNotes = () => async (dispatch, getState) => {
   try {
      dispatch({ type: "NOTES_LIST_REQUEST" });
      const userInfo = getState()?.userLogin?.userInfo;
      const config = {
         headers: { Authorization: "Bearer " + userInfo?.token },
      };
      const { data } = await axios.get("/api/notes", config);
      dispatch({ type: "NOTES_LIST_SUCCESS", payload: data });

      localStorage.setItem("notes", JSON.stringify(data));
   } catch (error) {
      console.log(error);
      dispatch({
         type: "NOTES_LIST_FAIL",
         payload: error?.response?.data?.message,
      });
   }
};

export const createNote =
   (title, content, category) => async (dispatch, getState) => {
      try {
         dispatch({ type: "NOTES_CREATE_REQUEST" });
         const userInfo = getState().userLogin.userInfo;
         const config = {
            headers: {
               "Content-type": "application/json",
               Authorization: "Bearer " + userInfo.token,
            },
         };

         const { data } = await axios.post(
            "/api/notes/create",
            { title, content, category },
            config
         );

         dispatch({ type: "NOTES_CREATE_SUCCESS", payload: data });
      } catch (error) {
         console.log(error);
         dispatch({
            type: "NOTES_CREATE_FAIL",
            payload: error?.response?.data?.message,
         });
      }
   };

export const updateNoteAction =
   (id, title, content, category) => async (dispatch, getState) => {
      try {
         dispatch({ type: "NOTES_UPDATE_REQUEST" });
         const userInfo = getState().userLogin.userInfo;
         const config = {
            headers: {
               "Content-type": "application/json",
               Authorization: "Bearer " + userInfo.token,
            },
         };

         const { data } = await axios.put(
            `/api/notes/update/${id}`,
            { title, content, category },
            config
         );
         dispatch({ type: "NOTES_UPDATE_SUCCESS", payload: data });
      } catch (error) {
         console.log(error);
         dispatch({
            type: "NOTES_UPDATE_FAIL",
            payload: error?.response?.data?.message,
         });
      }
   };

export const noteDeleteAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: "NOTES_DELETE_REQUEST" });
      const userInfo = getState().userLogin.userInfo;

      const config = {
         headers: { Authorization: "Bearer " + userInfo.token },
      };

      const { data } = axios.delete(`/api/notes/delete/${id}`, config);
      dispatch({ type: "NOTES_DELETE_SUCCESS", payload: data });
   } catch (error) {
      console.log(error);
      dispatch({
         type: "NOTES_DELETE_FAIL",
         payload: error?.response?.data?.message,
      });
   }
};
