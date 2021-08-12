import { useRef } from "react";
import {WrapperInfo,LibraryInput,LibraryButton,Wrapper,Title} from "../Styles/LibraryRegistration-style"
import PostLibrary from "../Components/LibraryRegistration/PostLibrary";

function LibraryRegistration() {

    const Input = useRef();
    return(
    <>
        <Title>Library Registration</Title>
        <Wrapper>
            <WrapperInfo>
                    <LibraryInput ref={Input}></LibraryInput>
                    <LibraryButton onClick={()=>{PostLibrary(Input.current.value)
                    Input.current.value='';
                    }}>Library Registration</LibraryButton>
                
            </WrapperInfo>
        </Wrapper>
    </>
    );
}

export default LibraryRegistration;
