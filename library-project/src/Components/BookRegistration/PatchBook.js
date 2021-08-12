import axios from "axios";
import { useParams } from "react-router-dom";
import PostBook from "./PostBook";


function PatchBook({title,libraryId,bookId}) {

    if(bookId==0) return PostBook({title:title,libraryId:libraryId});

    try{
        axios.patch(`http://18.116.117.16:8080/book/${bookId}`,{title:title,libraryId:libraryId})
    }
    catch(e){
        return alert(e);
    }
    return alert('success patch')
}

export default PatchBook;