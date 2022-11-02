import MainPage from './pages/main_page'
import Login from './pages/login'
import Meditation from './components/meditation_card';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  const meditations = ({
    title: "aadas",
    img: "../img/icons/lotus.png"
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/meditations" element={<Meditation title="asd"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
