import styled from "styled-components"

function BookRegistration() {
    return(
    <>
        <BookTitle>Book Registration</BookTitle>
        <Wrapper>
            <WrapperInfo></WrapperInfo>
        </Wrapper>
    </>
    );
}

export default BookRegistration;

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
`