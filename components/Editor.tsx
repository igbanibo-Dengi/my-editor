"use client";

import React from "react";
import "quill/dist/quill.snow.css"; // Add css for snow theme
// import "quill/dist/quill.bubble.css"; // Add css for bubble theme

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

// import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const Editor = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote"],
      ["code-block"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  // const theme = "snow";
  const theme = "snow";
  const placeholder = "Compose an epic...";

  const { quill, quillRef } = useQuill({ modules, theme, placeholder });

  console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div style={{ width: 1000, height: 300 }} className="mb-56 ">
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
