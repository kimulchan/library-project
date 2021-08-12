
import Library1 from "../Assets/도서관1.jpg"
import Library2 from "../Assets/도서관2.jpg"
import Library3 from "../Assets/도서관3.jpg"
import Library4 from "../Assets/도서관4.jpg"
import B1 from "../Assets/bookImg1.jpg";
import B4 from "../Assets/bookImg4.jpg";
import B5 from "../Assets/bookImg5.jpg";
import B6 from "../Assets/bookImg6.jpg";
import B7 from "../Assets/bookImg7.jpg";
import B8 from "../Assets/bookImg8.jpg";
import {Library,Librarys, NewBook, LibraryListWrapper,Slide,MainImage} from "../Styles/MainPage-style";
function MainPage() {
    return(
        <>
            <Slide>
                <ul>
                <MainImage imgUrl={Library1}></MainImage>
                <MainImage imgUrl={Library2}></MainImage>
                <MainImage imgUrl={Library3}></MainImage>
                <MainImage imgUrl={Library4}></MainImage>
                </ul>
                
            </Slide>
            
            <LibraryListWrapper>
            <NewBook>New Book</NewBook>
            <Librarys>
                    
                    <Library imgUrl={B1}></Library>
                    <Library imgUrl={B4}></Library>
                    <Library imgUrl={B5}></Library>
                </Librarys>
                <Librarys>

                    <Library imgUrl={B6}></Library>
                    <Library imgUrl={B7}></Library>
                    <Library imgUrl={B8}></Library>
                </Librarys>
            
            </LibraryListWrapper>
        </>
    );
}
export default MainPage
