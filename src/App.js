import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



function App() {

  return (
      <div className='app-container'>
          <Header/>
          <Nav/>
          <Sidebar/>
          <Routes>
              <Route path={'/'} element={<ProfileContainer/>}/>
              <Route path={'/dialogs'} element={<DialogsContainer/>}/>
              <Route path={'/users'} element={<UsersContainer/>}/>
              <Route path={'/music'} element={<Music/>}/>
              <Route path={'/settings'} element={<Settings/>}/>
          </Routes>
      </div>
  );
}

export default App;
