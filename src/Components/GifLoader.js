import React from "react";

const GifLoader = (props) => {
  return (
    <div>
      {props.showGif && (
        <div>
          <div
            className="card"
            style={{ width: "18rem", border: "2px solid darkGrey" }}
          >
            <div className="card-body">
              <input
                type="text"
                style={{ width: "90%" }}
                onChange={props.getGifs}
              />
            </div>
            <div>
              {props.gifsData.map((imageData, index) => {
                return (
                  <img
                    key={index}
                    alt="gifs"
                    src={imageData.images.original.url}
                    style={{ maxWidth: "85%" }}
                    onClick={props.seletedGif}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default GifLoader;
