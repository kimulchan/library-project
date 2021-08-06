import { Switch,Route } from "react-router-dom"

import TopBar from './Routes/TopBar'
import BookList from './Routes/BookList'
import LibraryListPage from './Routes/LibraryListPage'
import MainPage from './Routes/MainPage'
import LibraryRegistration from './Routes/LibraryRegistration'
import BookRegistration from './Routes/BookRegistration'
import BottomBar from './Routes/BottomBar'
function RouteContent (){
    return(<>
        <TopBar></TopBar>
        <Switch>
            <Route path="/" component={MainPage}exact></Route>
            <Route path="/librarylist" component={LibraryListPage}></Route>
            <Route path="/libraryregistration" component={LibraryRegistration}></Route>
            <Route path="/booklist" component={BookList}></Route>
            <Route path="/bookregistration" component={BookRegistration}></Route>
        </Switch>
        <BottomBar></BottomBar>
    </>

    );
}
export default RouteContent;