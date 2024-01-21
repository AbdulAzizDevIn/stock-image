
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const ImagePreview = ({ selectedImage, onClose }) => {
    const handleCloseClick = () => {
        onClose();
    };


    return (
        <>
            {selectedImage && (
                <div style={{
                    width: '1350px',
                    height: '780px',
                    top: '120.37px',
                    left: '310.1px',
                    borderRadius: '8.89px',
                    background: "white",
                    position: "absolute",
                }}>
                    <div style={{
                        width: "100%",
                        height: "76px",
                        background: "#F5F5F5",
                        borderRadius: '8.89px',
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: "center",
                    }}>
                        <div style={{ fontSize: "25px", fontWeight: "Bold", marginLeft: "25px" }}>Preview ID: {selectedImage.id}</div>
                        <CloseIcon onClick={handleCloseClick} sx={{ fontSize: "30px", border: "0.1px solid black", borderRadius: "8px", marginRight: "25px", cursor: "pointer" }} />

                    </div>
                    <div style={{

                        marginTop: "40px",
                        marginLeft: "25px",
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: "center",
                    }}>
                        <div
                        >
                            <img style={{
                                width: "900px",
                                height: "600px",
                                background: "orange",
                                borderRadius: '7px',
                            }} src={selectedImage.webformatURL} alt="" />
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

                                <div class="hidden-toggles">
                                    <input name="coloration-level" type="radio" id="coloration-low" class="hidden-toggles__input" value={selectedImage.previewURL}/>
                                    <label for="coloration-low" class="hidden-toggles__label">Low</label>

                                    <input name="coloration-level" type="radio" id="coloration-medium" class="hidden-toggles__input" value={selectedImage.webformatURL}/>
                                    <label for="coloration-medium" class="hidden-toggles__label">Medium</label>

                                    <input name="coloration-level" type="radio" id="coloration-high" class="hidden-toggles__input" value={selectedImage.largeImageURL} />
                                    <label for="coloration-high" class="hidden-toggles__label">High</label>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                }}>
                                    <button style={{
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
                                display:"flex",
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
                                    marginLeft:"10px",
                                    fontWeight:"bold"
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
