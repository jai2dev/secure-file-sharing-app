import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../redux/actions/fileActions";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
