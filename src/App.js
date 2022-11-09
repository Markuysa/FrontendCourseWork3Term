import MainPage from './pages/main_page'
import Login from './pages/login'
import MeditationsPage from './pages/meditations_list_Page';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import MeditationPage from './pages/meditationPage';
import SignUp from './pages/signUp';
import UserProfilePage from './pages/userProfilePage';
function App() {

  const [meditations, setMeditations]= useState([
    {id:1,title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, error aut? Ab error adipisci officiis officia ",img: "https://static.tildacdn.com/tild6431-3236-4235-a665-383862306136/dew_med.jpg",rating: 4.1},
    {id:2,title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, error aut? Ab error adipisci officiis officia ",img: "https://static.tildacdn.com/tild6431-3236-4235-a665-383862306136/dew_med.jpg",rating: 4.4},
    {id:3,title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, error aut? Ab error adipisci officiis officia ",img: "https://static.tildacdn.com/tild6431-3236-4235-a665-383862306136/dew_med.jpg",rating: 4.0},
    {id:4,title: "Lorem ipsum dolor sit, amet consectetur adipisicing",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 5.0},
    {id:5,title: "Ab error adipisci officiis officia ",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 3.1},
    {id:6,title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Ab error adipisci officiis officia ",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.2},
    {id:7,title: "Ex, error aut? Ab error adipisci officiis officia ",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.5}
  ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/meditations" element={<MeditationsPage meditations={meditations}/>} />
          <Route path="/meditation" element={<MeditationPage meditations={meditations}/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;
