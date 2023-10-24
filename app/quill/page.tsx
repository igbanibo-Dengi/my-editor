"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const page = () => {
  const [value, setValue] = useState("");

  const handleTextChange = (e) => {
    setValue(e.htmlValue);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        onTextChange={handleTextChange}
      />

      <div>
        <h2>Updated Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </div>
    </div>
  );
};

export default page;
