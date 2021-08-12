import { useEffect } from "react";
import { Link } from "react-router-dom";
import GetLibraryList from "./GetLibraryList";
import {Library,LibraryNumber,LibraryName} from 'C:/Programming/library-project/library-project/src/Styles/LibraryList-style'


function ShowLibrary() {
    let library = GetLibraryList();
    console.log(library);
    let LId=1;
    useEffect(()=>{
        LId=1;
    },[])
    if(!library) return <div></div>
    return(<>
        {library.map(({id,name,foundingYear})=>{
            return(<Link to={`/booklist/${id}`}>
                <Library>
                    <LibraryNumber>{LId++}</LibraryNumber>
                    <LibraryName>{name}</LibraryName>
                    <LibraryName>{foundingYear}</LibraryName>
                </Library> 
            </Link>)
           
        })}
    </>
    )
    
}
export default ShowLibrary;