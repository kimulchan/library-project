import axios from "axios";


function PostBook({title,libraryId}) {

    try{
        axios.post(`http://18.116.117.16:8080/book`,{title:title,libraryId:libraryId});
    }
    catch(e){
        return alert(e);
    }    
    return alert('success post!');
}

export default PostBook;