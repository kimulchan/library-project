import styled from "styled-components";
import Library1 from "../Assets/도서관1.jpg"
import LibraryIcon from "../Assets/도서관아이콘.png"
function MainPage() {
    return(
        <>
            <MainImage imgUrl={Library1}></MainImage>
            <LibraryListWrapper>
                <Librarys>
                    <Library imgUrl={LibraryIcon}></Library>
                    <Library imgUrl={LibraryIcon}></Library>
                    <Library imgUrl={LibraryIcon}></Library>
                </Librarys>
            
            </LibraryListWrapper>
        </>
    );
}
export default MainPage
const MainImage = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${(props)=>props.imgUrl});
    background-position: center;

`
const LibraryListWrapper= styled.div`
    height:400px;
    display: flex;
    justify-content: center;
    
`
const Librarys= styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Library = styled.div`
    background-image: url(${prop => prop.imgUrl});
    width: 250px;
    height: 80%;
    border:1px solid #dddddd;
    border-radius:10px;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
    -webkit-box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
    -moz-box-shadow: 0px 0px 32px -2px rgba(0,0,0,0.44);
`