import axios from "axios";

function PostLibrary(name) {
   

    try{
        axios.post('http://18.116.117.16:8080/library',{name:name})
    }
    catch(e){
        return alert(e);
    }
    return alert('success post');
}

export default PostLibrary;