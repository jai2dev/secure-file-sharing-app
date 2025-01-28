import axios from "axios";

export const uploadFile = (file) => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState();
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/files/upload/", formData, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });

    dispatch({ type: "UPLOAD_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPLOAD_FAIL", payload: error.message });
  }
};

export const fetchFiles = () => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState();
    const response = await axios.get("/api/files/list/", {
      headers: { "Authorization": `Bearer ${token}` },
    });

    dispatch({ type: "FETCH_FILES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_FILES_FAIL", payload: error.message });
  }
};
