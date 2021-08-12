import styled from "styled-components";


const BottomBarWrapper= styled.div`
    width: 100%;
    height:100px;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    border-top : 1px solid #dddddd;
    
`
const BottomText = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BottomLogo=styled.div`
    padding: 0 20px;
    height: 80%;
    font-size: 50px;
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Text = styled.div`
    padding: 0 20px;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 80%;
    font-size: 20px;
`

export {Text,BottomText,BottomLogo,BottomBarWrapper}