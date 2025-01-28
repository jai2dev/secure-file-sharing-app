const initialState = {
    files: [],
  };
  
  export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPLOAD_SUCCESS":
        return { ...state, files: [...state.files, action.payload] };
      case "FETCH_FILES_SUCCESS":
        return { ...state, files: action.payload };
      default:
        return state;
    }
  };
  