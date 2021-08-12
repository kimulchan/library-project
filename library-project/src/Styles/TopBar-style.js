import styled from "styled-components"

const Wrapper = styled.div`
    width :100%;
    height: 150px;
    display: flex;
    justify-content: center;
    min-width: fit-content;
    border-bottom: 1px solid #dddddd;
`
const ContentsWrapper = styled.div`
    width:60%;
    `
const Logo = styled.div`
    display: flex;
    align-items: center;

    height: 70%;
    font-size: 40px;
    font-weight: 600;
    color: black;
`
const MenuWrapper = styled.div`
    width: 50%;
    height: 30%;
    display: flex;
    justify-content: space-between;
`
const Menu = styled.div`
    font-size: 20px;
`

export {Menu, MenuWrapper,Logo,ContentsWrapper,Wrapper}