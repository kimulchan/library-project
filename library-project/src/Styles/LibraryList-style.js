import styled from 'styled-components';

const LibraryTitle= styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
`
const LibraryWrapper=styled.div`
    width:100%;
    min-height: calc(100vh - 414.8px);
    display: flex;
    justify-content: center;

`
const LibraryListWrapper=styled.div`
    width: 60%;
    height: 100%;
    border-top: 1px solid #dddddd;
    
`

const Library = styled.div`
    border-bottom: #dddddd solid 1px;
    display: flex;
    justify-content: space-evenly;
    height: 40px;

`

const LibraryNumber = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    
    
`

const LibraryName = styled.div`
    width: 300px;
    display:flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
`


export {Library,LibraryListWrapper,LibraryWrapper,LibraryTitle,LibraryNumber,LibraryName}
