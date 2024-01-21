
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ImagePreview = ({ selectedImage, onClose }) => {
    const dispatch = useDispatch();
    const downloadImage = useSelector((state) => state.downloadImage);
    const handleCloseClick = () => {
        onClose();
    };

    const [selectedResolution, setSelectedResolution] = useState(selectedImage.previewURL);
    const handleResolutionChange = (e) => {
        setSelectedResolution(e.target.value);
    };
    const handleImageDownload = () => {
        const existingDownloads = JSON.parse(localStorage.getItem("downloadImage")) || [];

        const isAlreadyDownloaded = existingDownloads.some((downloadedImage) => downloadedImage.id === selectedImage.id);

        if (!isAlreadyDownloaded) {
            dispatch({ type: "SET_DOWNLOAD_IMAGE", payload: selectedImage });

            const updatedDownloads = [...existingDownloads, selectedImage];
            localStorage.setItem("downloadImage", JSON.stringify(updatedDownloads));
        }

        window.open(selectedResolution, '_blank');
    };
    useEffect(() => {
        setSelectedResolution(selectedImage.previewURL)
    }, [selectedImage])

    return (
        <>
            {selectedImage && (
                <div className='preview'
                 >
                    <div style={{
                        width: "100%",
                        height: "76px",
                        background: "#F5F5F5",
                        borderRadius: '8.89px',
                        display: "flex",
                        flexDirection:"row",
                        justifyContent: 'space-between',
                        alignItems: "center",
                    }}>
                        <div style={{ fontSize: "25px", fontWeight: "Bold", marginLeft: "25px" }}>Preview ID: {selectedImage.id}</div>
                        <CloseIcon onClick={handleCloseClick} sx={{ fontSize: "30px", border: "0.1px solid black", borderRadius: "8px", marginRight: "25px", cursor: "pointer" }} />

                    </div>
                    <div 
                    className='image-container'
                    >
                        <div
                        >
                            <img  className="image "  src={selectedImage.webformatURL} alt="" />
                            <div style={{
                                display: 'flex'
                            }}>
                                <p style={{ fontWeight: "bold" }}>Tags:</p>
                                <p>
                                    {selectedImage.tags.split(",").map((tag) => (
                                        <Button sx={{ color: "gray", border: "0.01px solid grey", marginLeft: "5px", height: "25px" }}>{tag.trim()}</Button>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div style={{

                            height: "600px",
                            width: "370px",
                            marginRight: "20px ",
                            marginTop: "50px"
                        }}>
                            <div style={{ fontSize: "22px", fontWeight: "bold" }}>Download</div>
                            <div style={{
                                width: "280px",
                                height: "165px",
                                paddingTop: "20px",

                            }}>

                                <div className="hidden-toggles">
                                    <input
                                        name="coloration-level"
                                        type="radio"
                                        id="coloration-low"
                                        className="hidden-toggles__input"
                                        value={selectedImage.previewURL}
                                        checked={selectedResolution === selectedImage.previewURL}
                                        onChange={handleResolutionChange}
                                    />
                                    <label htmlFor="coloration-low" className="hidden-toggles__label">
                                        Low
                                    </label>

                                    <input
                                        name="coloration-level"
                                        type="radio"
                                        id="coloration-medium"
                                        className="hidden-toggles__input"
                                        value={selectedImage.webformatURL}
                                        checked={selectedResolution === selectedImage.webformatURL}
                                        onChange={handleResolutionChange}
                                    />
                                    <label htmlFor="coloration-medium" className="hidden-toggles__label">
                                        Medium
                                    </label>

                                    <input
                                        name="coloration-level"
                                        type="radio"
                                        id="coloration-high"
                                        className="hidden-toggles__input"
                                        value={selectedImage.largeImageURL}
                                        checked={selectedResolution === selectedImage.largeImageURL}
                                        onChange={handleResolutionChange}
                                    />
                                    <label htmlFor="coloration-high" className="hidden-toggles__label">
                                        High
                                    </label>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}>
                                    <button
                                        onClick={handleImageDownload}
                                        style={{
                                            marginTop: 30,
                                            marginLeft: 30,
                                            padding: "10px",
                                            background: "#4BC34B",
                                            width: "274.67px",
                                            height: "40.33px",
                                            border: "0",
                                            borderRadius: "4.44px",
                                            color: "#FFFFFF",
                                            cursor: "pointer",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                        }}>Download for free!</button>
                                </div>
                            </div>
                            <div style={{ fontSize: "22px", fontWeight: "bold" }}>Information</div>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}>
                                <div style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                                    marginTop: "20px "
                                }}>
                                    <img style={{
                                        width: "100px",
                                        height: "100px",
                                    }} src={selectedImage.userImageURL} alt="" />

                                </div>
                                <p style={{
                                    marginLeft: "10px",
                                    fontWeight: "bold"
                                }}>{selectedImage.user}</p>
                            </div>


                            <div className='info' style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "350px",
                                margin: "0 auto",
                            }}>
                                <p>User <div>{selectedImage.user}</div></p>
                                <p>User ID <div>{selectedImage.user_id}</div></p>
                                <p>Type <div>{selectedImage.type}</div></p>
                            </div>
                            <div className='info' style={{
                                display: "flex",
                                justifyContent: 'space-between',
                                alignItems: "center",
                                width: "350px",
                                margin: "0 auto",
                            }}>
                                <p>Views <div>{selectedImage.views}</div></p>
                                <p>Downloads <div>{selectedImage.downloads}</div></p>
                                <p>Likes <div>{selectedImage.likes}</div></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default ImagePreview;
