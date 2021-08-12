import GetLibraryList from "../LibraryList/GetLibraryList"


function LibraryOption (){
    let library = GetLibraryList();

    if(!library)return <option>null</option>
    
    return(
        <>
            {library.map(({id,name})=>{
                return(
                    <option value={id}>{name}</option>
                )
                    
            })}
        </>
    )
}

export default LibraryOption;