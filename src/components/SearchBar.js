import SearchIcon from '@mui/icons-material/Search';
import { InputBase, InputAdornment, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

let searchBtnStyle = {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(5px)",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "0.5px solid grey",
    padding: "7px",
    paddingBottom: "8px",
};

let searchContainerStyle = {
    width: "757.03px",
    height: "67.69px",
    borderRadius: "0px",
    border: "0.5px solid grey",
    fontSize: "14px",
    padding: "12px",
    color: "#696e79",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(5px)",
    "&::placeholder": {
        color: "white !important",
        fontWeight: "bold",
    },
};

let searchBtnStyle2 = {
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "15px",
    padding: "7px",
    paddingBottom: "8px",
};

const SearchBar = ({onApiCallClick}) => {
    
    let dispatch = useDispatch();
    let imageBox = useSelector((state) => state.imageBox);
    let searchItem = useSelector((state) => state.searchItem);

    const handleSearchItem = (e) => {
        let inputValue = e.target.value;
        dispatch({type:"SET_SEARCH_ITEM",payload:inputValue})
    };

    const handleApiCall = async () => {
        if (searchItem.trim() === "") {
            console.log("Search value cannot be empty");
            return;
        }

        try {
            const response = await fetch(`https://pixabay.com/api/?key=41917764-48f82f6f3d1fceb2263a69f06&q=${searchItem}&image_type=photo`);
            const data = await response.json();
            dispatch({ type: "SET_IMAGE_BOX", payload: data.hits });
            console.log(imageBox);
            onApiCallClick();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
    }, [searchItem]);

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "10px" }}>
            <Button style={searchBtnStyle}>
                <SearchIcon style={{ fontSize: 30 }} />
            </Button>
            <InputBase
                onChange={handleSearchItem}
                value={searchItem}
                sx={searchContainerStyle}
                placeholder="Search"
                inputProps={{ style: { color: 'white', fontWeight: 'bold', fontSize: "18px" } }}
                endAdornment={
                    <InputAdornment position="end">
                        <Button onClick={handleApiCall} style={searchBtnStyle2}>
                            GO!
                        </Button>
                    </InputAdornment>
                }
            />
        </div>
    );
};

export default SearchBar;
 