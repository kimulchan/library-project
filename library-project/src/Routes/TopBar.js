
import { Link }from "react-router-dom"

import {Menu, MenuWrapper,Logo,ContentsWrapper,Wrapper} from "../Styles/TopBar-style"
function TopBar() {
    return(
        <Wrapper>
            <ContentsWrapper>
                <Logo><Link to='/'>Library</Link></Logo>
                <MenuWrapper>
                    <Link to='/bookregistration/0'><Menu>Book Registration</Menu></Link>
                    <Link to='/libraryregistration'><Menu>Library Registration</Menu></Link>
                    <Link to='/librarylist'><Menu>Library List</Menu></Link>
                    
                </MenuWrapper>
            </ContentsWrapper>
        </Wrapper>
    );
}
export default TopBar;
