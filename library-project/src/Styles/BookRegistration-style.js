import styled from "styled-components";


const BookTitle= styled.div`
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
    align-items: center;
`
const SelectWrapper = styled.div`
    height: 80px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items:center;

    & select{
        margin-left: 30px;
        width: 500px;
        height:30px;
        padding: 0 5px;
        font-size: 20px;
    }
    & option{
        font-size: 20px;
    }

`
const BookWrapper = styled.div`
    height: 80px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items:center;
    & input{
        border-radius:0;
        margin-left: 60px;
        width: 500px;
        height:30px;
        padding: 0 5px;
        font-size: 20px;
        border: 1px solid black;
    }
`
const RegistrationButton = styled.button`
    margin-top: 40px;
    width: 200px;
    height: 40px;
    font-size: 20px;

`

export {RegistrationButton, BookWrapper,SelectWrapper,Wrapper,WrapperInfo,BookTitle}