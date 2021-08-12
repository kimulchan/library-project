import styled from "styled-components";


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

export {Library,Librarys, NewBook, LibraryListWrapper,Slide,MainImage}