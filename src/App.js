import MainPage from './pages/main_page'
import Login from './pages/login'
import MeditationsList from './components/meditationsList';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useState } from 'react';
function App() {

  const [meditations, setMeditations]= useState([
    {id:1,itle: "asfas",img: "../img/meditation_image.png"},
    {id:2,title: "asd",img: "../img/meditation_image.png"},
    {id:3,title: "cc",img: "../img/meditation_image.png"},
    {id:4,title: "aa",img: "../img/meditation_image.png"},
    {id:5,title: "zz",img: "../img/meditation_image.png"},
    {id:6,title: "ss",img: "../img/meditation_image.png"},
  ])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/meditations" element={<MeditationsList meditations={meditations}/>} />
      </Routes>       
    </BrowserRouter>  
  );
}

export default App;
