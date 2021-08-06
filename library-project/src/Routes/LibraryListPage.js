import styled from "styled-components";

function LibraryListPage() {
    return(
        <>
            <LibraryTitle>LibraryList</LibraryTitle>
            <LibraryWrapper>
            <LibraryListWrapper>
                <LibraryList></LibraryList>
            </LibraryListWrapper>
            
            </LibraryWrapper>
            
        </>
    );
}
export default LibraryListPage;

const LibraryTitle= styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
`
const LibraryWrapper=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
`
const LibraryListWrapper=styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`
const LibraryList =styled.div`
    width: 250px;
    height: 300px;
    border:1px solid #dddddd;
    border-radius:10px;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
    -webkit-box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
    margin: 30px 0;
`
