// Home.js

import { Button } from "@mui/material";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const imageBox = useSelector((state) => state.imageBox);
  const searchItem = useSelector((state) => state.searchItem);

  const [apiCallClicked, setApiCallClicked] = useState(false);
  const [loading, setLoading] = useState(false);


  const [selectedImage, setSelectedImage] = useState(null);

  const handleApiCallClick = () => {
    setLoading(true);
    setApiCallClicked(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/')",
          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div style={{ width: "100%", height: "40vh" }}>
          {apiCallClicked ? (
            <div style={{ paddingTop: "150px" }}> </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "150px",
                color: "white",
                fontSize: "70px",
                fontWeight: "bold",
              }}
            >
              Discover over 2,000,000 <div>free Stock Images</div>
            </div>
          )}
          <div style={{ width: "100%" }}>
            <SearchBar onApiCallClick={handleApiCallClick} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "60px",
              fontWeight: "700",
            }}
          >
            {apiCallClicked && <div style={{ paddingTop: "20px" }}>Results: {searchItem}</div>}
          </div>
        </div>

        {loading ? (
          <div style={{ width: "100%", height: "60vh", background: "white" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px" }}>
              <img style={{ width: 50, paddingTop: 50 }} src="https://i.stack.imgur.com/kOnzy.gif" alt="loading" />
            </div>
          </div>
        ) : apiCallClicked ? (
          <div style={{ width: "100%", height: "60vh", background: "white" }}>
            <div
              style={{
                paddingTop: "1%",
                paddingBottom: "1%",
                paddingLeft: "4%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {imageBox.map((image) => (
                <div
                  key={image.id}
                  style={{
                    width: "100%",
                    maxWidth: "550px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    fontSize: "15px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                  
                >
                  <img
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      cursor: "pointer",
                    }}
                    src={image.webformatURL}
                    alt=""
                    onClick={() => handleImageClick(image)}
                  />
                  <p>
                    {image.tags.split(",").map((tag) => (
                      <Button sx={{ color: "gray", border: "0.01px solid grey", marginLeft: "5px", height: "25px" }}>{tag.trim()}</Button>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "80px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid white",
                width: "271.64px",
                height: "39.19px",
                borderRadius: "8.91px",
                color: "white",
              }}
            >
              <div style={{ marginRight: "8px", fontWeight: "bold" }}>Trending:</div>
              <p style={{ color: "#c0c0c0" }}>flowers, love, forest, river</p>
            </div>
          </div>
        )}
      </div>
              
      {selectedImage && <ImagePreview selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  );
};

export default Home;

