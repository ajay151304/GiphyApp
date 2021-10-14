import React from "react";

const InputWrapper = (props) => {
  return (
    <div>
      <textarea
        className="textarea container"
        placeholder="write something here"
        ref={props.textAreaText}
      ></textarea>

      <div className="selectedGif">
        {props.selectedImg && (
          <img style={{ width: "85%" }} alt="" src={props.selectedImg} />
        )}
      </div>
      <button className="container gif" onClick={props.getGif}>
        Insert GIF
      </button>
      <button className="post-btn gif" onClick={props.addPost}>
        POST
      </button>
    </div>
  );
};

export default InputWrapper;
