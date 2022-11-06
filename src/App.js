import MainPage from './pages/main_page'
import Login from './pages/login'
import MeditationsList from './pages/meditationsList';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useState } from 'react';
function App() {

  const [meditations, setMeditations]= useState([
    {id:1,title: "asfas",img: "https://ucare.timepad.ru/d496d280-6a53-4aa7-89e3-038cf3acf5d1/poster_event_2003069.jpg",rating: 4.1},
    {id:2,title: "asd",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.4},
    {id:3,title: "cc",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.0},
    {id:4,title: "aa",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 5.0},
    {id:5,title: "zz",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 3.1},
    {id:6,title: "ss",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.2},
    {id:7,title: "asasfas",img: "https://www.polsov.com/upload/014/u1405/d/f/b90242d0.jpg",rating: 4.5}
  ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/meditations" element={<MeditationsList meditations={meditations} onMeditationsChange={setMeditations}/>} />
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;
