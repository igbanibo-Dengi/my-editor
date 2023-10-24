"use client";

import "./styles.css";
import React, { useState } from "react";
// import "quill/dist/quill.bubble.css"; // Add css for bubble theme

import "./styles.css";

import { Editor } from "primereact/editor";

const Prime = () => {
  const [value, setValue] = useState("");

  const handleTextChange = (e) => {
    const updatedHtmlValue = e.htmlValue;
    setValue(updatedHtmlValue);
  };

  const styles = {
    maxWidth: "800px",
    // minHeight: "320px",
    margin: "0 auto",
    border: "none",
  };
  const renderToolBar = () => {
    return (
      <div className="container bg-white z-50 w-full">
        <span className="bg-white flex flex-wrap gap-5 items-center justify-center py-5 fixed  max-w-[1200px] mx-auto border border-gray-500 rounded w-full">
          <button className="ql-bold" aria-label="Bold"></button>
          <button className="ql-italic" aria-label="Italic"></button>
          <button className="ql-underline" aria-label="Underline"></button>
          <button className="ql-strike" aria-label="Strike"></button>
          <button className="ql-link"></button>
          {/* <button className="ql-blockquote" aria-label="Block-quote"></button> */}
          <button className="ql-code-block" aria-label="Code-block"></button>
          <button className="ql-header" aria-label="Header" value={1}></button>
          <button className="ql-header" aria-label="Header" value={2}></button>
          <select className="ql-header">
            <option value={1} />
            <option selected />
            <option value={2} />
            <option value={3} />
            <option value={4} />
            <option value={5} />
            <option value={6} />
          </select>
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <button className="ql-script" value="sub" />
          <button className="ql-script" value="super" />
          {/* <button className="ql-indent" value="-1" /> */}
          {/* <button className="ql-indent" value="+1" /> */}
          <select className="ql-font"></select>
          <select className="ql-align"></select>
          <button className="ql-image"></button>
          <span className="py-1 px-4 text-[14px] text-white bg-green-500 rounded">
            Publish
          </span>
        </span>
        <div className="pt-20 max-w-[845px] mx-auto">
          <input
            name="title"
            placeholder="title"
            className="text-4xl w-full mx-auto focus:outline-none
          text-gray-500"
          />
        </div>
      </div>
    );
  };
  const tool = renderToolBar();

  return (
    <div className="">
      <Editor
        value={value}
        onTextChange={handleTextChange}
        style={styles}
        placeholder="enter text here"
        headerTemplate={tool}
        theme="snow"
        pt={{
          content: {
            style: {
              minHeight: "900px",
              // width: "80%",
              // border: "none",
              paddingTop: "150px",
              fontSize: "16px",
            },
          },
          toolbar: {
            style: {
              //   padding: "10px 5px",
              //   marginBottom: "100px",
              //   display: "flex",
              //   flexDirection: "column",
              //   flexWrap: "wrap",
              //   justifyContent: "justify-center",
              position: "fixed",
              width: "100%",
              border: "none",
              //   // border: "1px solid green",
              //   // margin: "0 auto",
              //   // top: "10px",
              zIndex: "50",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div>
        <h2 className="py-20">Updated Content:</h2>
        <div
          className="max-w-[800px] mx-auto"
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      </div>
    </div>
  );
};

export default Prime;
