import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function GetBookList() {
    const { id }= useParams()
    const [book,setBook]=useState();

    
    
    
    useEffect(()=>{
        const fatchBook = async () =>{
        try{
            
            setBook(null);
            
            let response = await axios.get(`http://18.116.117.16:8080/books/${id}`);
            setBook(response.data.books); 
        }
        catch(e){
            console.log(e);
        }
       

    };
    fatchBook();
    },[])
    
    if(!book) return null;
    return book;
}

export default GetBookList;