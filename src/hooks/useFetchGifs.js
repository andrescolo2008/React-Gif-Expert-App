import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
 
const[ images,setImages]= useState([]);
const[ isLoading,setIsloading]= useState(true);

const getImages= async() =>{

    const newImages = await getGifs(category);// este manda hacer la petición http
    setImages(newImages);
    setIsloading(false);
}

useEffect( ()=>{
   getImages();
},[])

    return  {
        images,// en vez de colocar images:images    colocarlas así-> images,
        isLoading
    }
}

