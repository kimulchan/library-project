import {BookName,BookNumber,Book,List,BookTitle,ListWrapper} from '../Styles/BookList-style';
import ShowBook from "../Components/BookList/ShowBook";
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
            <ShowBook></ShowBook>
            
        </List>
    </ListWrapper>

    </>
    );
}

export default BookList;
