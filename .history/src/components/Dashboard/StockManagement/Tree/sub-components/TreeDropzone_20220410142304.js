import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import manCTimber from "../../../.././../assets/man_cutting_timber.jpg";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 7,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 70,
  height: 70,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const TreeDropzone = () => {
  const [files, setFiles] = useState([manCTimber]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  //   const filess = acceptedFiles.map((file) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    console.log(files);
  }, [files]);

  const thumbs = files.map((file, index) => (
    <div
      style={thumb}
      key={file.name}
      onClick={() => setFiles(files.filter((f) => f.name != file.name))}
    >
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  return (
    <section className="bg-white p-2">
      <div
        {...getRootProps({
          className:
            "bg-gray-200 w-full h-[5rem] flex justify-center items-center",
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop images here, or click to select images</p>
      </div>
      <h4 className="py-1">Images</h4>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default TreeDropzone;
