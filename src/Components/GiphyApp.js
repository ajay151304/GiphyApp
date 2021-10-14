import { useState, useRef, useEffect } from "react";
import GifLoader from "./GifLoader";
import InputWrapper from "./InputWrapper";
import PostData from "./PostData";

const GiphyApp = () => {
  const [postData, setPostData] = useState([]);
  const [selectedImg, setSelectedImg] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [gifsData, setGifsData] = useState([]);

  const textAreaText = useRef();

  useEffect(() => {
    const fetchGif = async () => {
      const url =
        "https://api.giphy.com/v1/gifs/trending?api_key=LsEwWFSZ6YJ3Ao76rbgMAdJBSOBpNhUL&limit=1";
      const data = await fetch(url);
      const jsonData = await data.json();
      setGifsData(jsonData.data);
    };
    fetchGif();
  }, []);

  const getGifs = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    const url = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=LsEwWFSZ6YJ3Ao76rbgMAdJBSOBpNhUL&limit=1`;
    const data = await fetch(url);
    const jsonData = await data.json();
    setGifsData(jsonData.data);
  };

  const getGif = () => {
    setShowGif(true);
  };

  const seletedGif = (e) => {
    const imageUrl = e.target.currentSrc;
    setSelectedImg(imageUrl);
    setShowGif(false);
  };

  const addPost = () => {
    setShowGif(false);
    const value = textAreaText.current.value;
    if (value || selectedImg) {
      setPostData((postData) => {
        return [...postData, { text: value, img: selectedImg }];
      });
    }
    setSelectedImg("");
    textAreaText.current.value = "";
  };

  return (
    <div className="container">
      <InputWrapper
        textAreaText={textAreaText}
        selectedImg={selectedImg}
        getGif={getGif}
        addPost={addPost}
      />
      <GifLoader
        showGif={showGif}
        getGifs={getGifs}
        gifsData={gifsData}
        seletedGif={seletedGif}
      />
      <PostData postData={postData} />
    </div>
  );
};

export default GiphyApp;
