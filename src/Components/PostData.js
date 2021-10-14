import React from "react";

const PostData = (props) => {
  return (
    <div>
      <div style={{ paddingTop: "32px" }}>
        {props.postData.map((item, index) => {
          return (
            <div className="textArea container" key={index}>
              <hr style={{ width: "250px" }} />
              {item.text && <div>{item.text}</div>}
              {item.img && (
                <img
                  alt=""
                  style={{ width: "250px", paddingTop: "10px" }}
                  src={item.img}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostData;
