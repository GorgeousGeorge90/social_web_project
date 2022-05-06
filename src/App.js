import './App.css';
import Nav from "./components/Navigation/Nav";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileC";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MyProfileContainer from "./components/Profile/MyProfile";






function App() {

  return (
      <div className='app-container'>
          <HeaderContainer/>
          <Nav/>
          <Sidebar/>
          <Routes>
              <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
              {/*<Route path={'/profile/'} element={<MyProfileContainer/>}/>*/}
              <Route path={'/dialogs'} element={<DialogsContainer/>}/>
              <Route path={'/users'} element={<UsersContainer/>}/>
              <Route path={'/music'} element={<Music/>}/>
              <Route path={'/settings'} element={<Settings/>}/>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>
      </div>
  );
}

export default App;
