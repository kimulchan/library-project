import styled from "styled-components";

function BookList() {
    return(  
    <>  
    <BookTitle>Book List</BookTitle>
    <ListWrapper>
        <List>
            <Book>
                <BookNumber>BookNumber</BookNumber>
                <BookName>BookTitle</BookName>
                <BookName>Library</BookName>
                
                
            </Book>
            <Book>
                <BookNumber>BookNuddmber</BookNumber>
                <BookName>BookTiddddddddtle</BookName>
                <BookName>Librdddary</BookName>
                
                
            </Book>
        </List>
    </ListWrapper>

    </>
    );
}

export default BookList;

const BookTitle= styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
`
const ListWrapper= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const List = styled.div`
    width: 60%;
    height: calc(100vh - 415.8px);
    
    border-top: #dddddd solid 1px;
    overflow: auto;
`
const Book = styled.div`
    border-bottom: #dddddd solid 1px;
    display: flex;
    justify-content: space-evenly;
    height: 40px;

`

const BookNumber = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    
    
`

const BookName = styled.div`
    width: 300px;
    display:flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
`