import {BookName,BookNumber,Book} from 'C:/Programming/library-project/library-project/src/Styles/BookList-style'
import GetBookList from './GetBookList'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowBook() {
    let book=GetBookList();
    let id=1;
    useEffect(()=>{
        id=1;
    },[])
    if(!book)return (<div></div>)
      return(
                <>
                {book.map((prop)=>{
                    return(
                        <Link to={`/bookregistration/${prop.bookId}`}>
                            <Book>
                                <BookNumber>{id++}</BookNumber>
                                <BookName>{prop.title}</BookName>
                                <BookName>{prop.library}</BookName>
                            </Book>
                        </Link>
                    
                    );
                    
                 })
                 }
                </>
            )
        }
    

export default ShowBook;