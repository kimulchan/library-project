import GetDefault from "./GetDefault";

function Default (id){
    let data= GetDefault();
    let title=[];
    title = data.filter((prop)=>{
        if(prop.bookId==id) return prop.title
    })


    if(!title[0]) return;
    return title[0].title
    
    
}

export default Default;