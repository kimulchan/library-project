import { useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
import {RegistrationButton, BookWrapper,SelectWrapper,Wrapper,WrapperInfo,BookTitle} from '../Styles/BookRegistration-style'
import Default from "../Components/BookRegistration/Default";
import LibraryOption from "../Components/BookRegistration/LibraryOption";
import PatchBook from "../Components/BookRegistration/PatchBook";

function BookRegistration() {

    const {id}=useParams();
    const title=useRef();
    const select= useRef();
    
    return(
    <>
        <BookTitle>Book Registration</BookTitle>
        <Wrapper>
            <WrapperInfo>
                <SelectWrapper>Library Select  
                    <select ref={select}>
                        <LibraryOption></LibraryOption>
                    </select>
                </SelectWrapper>
                <BookWrapper>Book Name
                    <input ref={title} value={Default(id)}></input>
                </BookWrapper>
                <RegistrationButton onClick={()=>{PatchBook({title:title.current.value,libraryId:select.current.value,bookId:id})
                title.current.value='';

            }}>Book Registration</RegistrationButton>
            </WrapperInfo>
        </Wrapper>
    </>
    );
}

export default BookRegistration;
