
import { Button } from "@mui/material";


import { useSelector } from "react-redux";

const DownloadHist = () => {
  const downloadImage = JSON.parse(localStorage.getItem("downloadImage"))
  return (
    <div style={{
      width: "100%",
      paddingTop: "120px"
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "50px",
        fontWeight: "bold",
      }}
      >History</div>
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
        {downloadImage.map((image) => (
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
  )
}

export default DownloadHist;
