import axios from "axios";
import React, { useEffect, useState } from "react";
function GetLibraryList() {
    const [library,setLibrary]=useState();
    useEffect(()=>{
        const fatchLibrary = async () =>{
        try{
            setLibrary(null);
            let response = await axios.get(`http://18.116.117.16:8080/library`);
            setLibrary(response.data.libraries); 
        }
        catch(e){
            console.log(e);
        }

    };
    fatchLibrary();
    },[])
    
    if(!library) return null;
    
    return library;
}

export default GetLibraryList;