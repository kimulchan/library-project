import axios from "axios";
import { useEffect, useState } from "react";


function GetDefault(){
    
    const [data,setData]=useState([]);
    
    useEffect(async()=>{
       try{
        setData([]);
        let response =await axios.get('http://18.116.117.16:8080/book');
        setData(response.data.books);

       }
       catch(e){
           console.log(e);

       }  
    
    },[])

    if(!data)return null;
    
    return data;
        
    
    
}

export default GetDefault;