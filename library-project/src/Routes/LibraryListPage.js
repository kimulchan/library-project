
import ShowLibrary from "../Components/LibraryList/ShowLibrary"

import {Library,LibraryListWrapper,LibraryWrapper,LibraryTitle,LibraryNumber,LibraryName} from '../Styles/LibraryList-style'


function LibraryListPage() {
    return(
        <>
            <LibraryTitle>LibraryList</LibraryTitle>
            <LibraryWrapper>
            <LibraryListWrapper>
                <Library>
                    <LibraryNumber>Library Id</LibraryNumber>
                    <LibraryName>Library Name</LibraryName>
                    <LibraryName>Founding Year</LibraryName>
                </Library>
                <ShowLibrary></ShowLibrary>
            </LibraryListWrapper>
            
            </LibraryWrapper>
            
        </>
    );
}
export default LibraryListPage;

