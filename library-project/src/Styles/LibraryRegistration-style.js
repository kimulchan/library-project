import styled from "styled-components";


const Title= styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const WrapperInfo = styled.div`
    width: 60%;
    height: calc(100vh - 415.8px);
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const LibraryInput= styled.input`
    width: 60%;
    height: 50px;
    padding: 0 20px;
    font-size:25px;
    margin-Bottom:100px;
`
const LibraryButton= styled.button`
    width: 200px;
    height: 40px;
    font-size: 20px;
`

export {WrapperInfo,LibraryInput,LibraryButton,Wrapper,Title}