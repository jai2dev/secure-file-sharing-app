import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../redux/actions/fileActions";

const FileList = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} - <a href={file.url} target="_blank" rel="noreferrer">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
