export const noteListReducer = (state = { notes: [] }, action) => {
   if (action.type === "NOTES_LIST_REQUEST") {
      return { loading: true };
   } else if (action.type === "NOTES_LIST_SUCCESS") {
      return { loading: false, notes: action.payload };
   } else if (action.type === "NOTES_LIST_FAIL") {
      return { loading: false, error: action.payload };
   } else {
      return state;
   }
};

export const noteCreateReducer = (state = {}, action) => {
   if (action.type === "NOTES_CREATE_REQUEST") {
      return { loading: true };
   } else if (action.type === "NOTES_CREATE_SUCCESS") {
      return { loading: false, success: true };
   } else if (action.type === "NOTES_CREATE_FAIL") {
      return { loading: false, error: action.payload };
   } else {
      return state;
   }
};

export const noteUpdateReducer = (state = {}, action) => {
   if (action.type === "NOTES_UPDATE_REQUEST") {
      return { loading: true };
   } else if (action.type === "NOTES_UPDATE_SUCCESS") {
      return { loading: false, success: true };
   } else if (action.type === "NOTES_UPDATE_FAIL") {
      return { loading: false, error: action.payload, success: false };
   } else {
      return state;
   }
};

export const noteDeleteReducer = (state = {}, action) => {
   if (action.type === "NOTES_DELETE_REQUEST") {
      return { loading: true };
   } else if (action.type === "NOTES_DELETE_SUCCESS") {
      return { loading: false, success: true };
   } else if (action.type === "NOTES_DELETE_FAIL") {
      return { loading: false, error: action.payload, success: false };
   } else {
      return state;
   }
};
