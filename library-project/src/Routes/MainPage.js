import styled from "styled-components";
import Library1 from "../Assets/도서관1.jpg"
import Library2 from "../Assets/도서관2.jpg"
import Library3 from "../Assets/도서관3.jpg"
import Library4 from "../Assets/도서관4.jpg"
import B1 from "../Assets/bookImg1.jpg";
import B4 from "../Assets/bookImg4.jpg";
import B5 from "../Assets/bookImg5.jpg";
import B6 from "../Assets/bookImg6.jpg";
import B7 from "../Assets/bookImg7.jpg";
import B8 from "../Assets/bookImg8.jpg";

function MainPage() {
    return(
        <>
            <Slide>
                <ul>
                <MainImage imgUrl={Library1}></MainImage>
                <MainImage imgUrl={Library2}></MainImage>
                <MainImage imgUrl={Library3}></MainImage>
                <MainImage imgUrl={Library4}></MainImage>
                </ul>
                
            </Slide>
            
            <LibraryListWrapper>
            <NewBook>New Book</NewBook>
            <Librarys>
                    
                    <Library imgUrl={B1}></Library>
                    <Library imgUrl={B4}></Library>
                    <Library imgUrl={B5}></Library>
                </Librarys>
                <Librarys>

                    <Library imgUrl={B6}></Library>
                    <Library imgUrl={B7}></Library>
                    <Library imgUrl={B8}></Library>
                </Librarys>
            
            </LibraryListWrapper>
        </>
    );
}
export default MainPage

const Slide = styled.div`
    height: 400px;
    overflow:hidden;

    & ul{
        width: calc(100% * 4);
        display:flex;
        animation:slide 32s infinite;
    }
    & li{
        width:calc(100% / 4);
        height:400px;
    }
    @keyframes slide{
        0% {margin-left:0;}
        10%{margin-left:0;}
        25%{margin-left:-100%}
        35%{margin-left:-100%}
        50%{margin-left:-200%}
        60%{margin-left:-200%}
        75%{margin-left:-300%}
        85%{margin-left:-300%}
        100%{margin-left:0}
    }
`

const MainImage = styled.li`
    background-image: url(${(props)=>props.imgUrl});
    background-position: center;

`
const LibraryListWrapper= styled.div`
    height:900px;
    display: flex;
    flex-direction:column;
    align-items:center;

`
const NewBook = styled.div`
    height:100px;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Librarys= styled.div`
    width: 60%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Library = styled.div`
    background-image: url(${prop => prop.imgUrl});
    width: 210px;
    height: 80%;
    border:1px solid #dddddd;
    border-radius:10px;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
`