import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    imageBox:[],
    searchItem:"",
    downloadImage:[]
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_IMAGE_BOX":
        return{
            ...state,
            imageBox: action.payload
        };
        case "SET_SEARCH_ITEM":
            return{
                ...state,
                searchItem: action.payload
            };
        case "SET_DOWNLOAD_IMAGE":
            return{
                ...state,
                downloadImage:[...state.downloadImage, action.payload]
            }   
        default:
            return state
    }
}


const store =configureStore({
    reducer:reducer
})

export default store;
