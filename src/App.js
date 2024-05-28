
import './App.css';
import Tableau from './components/Tableau';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbarr from './components/Navbarr';
import { Route, Routes } from 'react-router-dom';
import Lundi from './components/Lundi';
import Mardi from './components/Mardi';
import Mercredi from './components/Mercredi';
import Jeudi from './components/Jeudi';
import Vendredi from './components/Vendredi';
import Samedi from './components/Samedi';
import Addperson from './components/Addperson';
function App() {
  return (
    <div>
      <Navbarr/>
      <Addperson/>
     {/* <Tableau/> */}
     <Routes>
     <Route  path="/" element={<Lundi />} />
     <Route  path="mardi" element={<Mardi />} />
     <Route  path="mercredi" element={<Mercredi />} />
     <Route  path="jeudi" element={<Jeudi />} />
     <Route  path="vendredi" element={<Vendredi />} />
     <Route  path="samedi" element={<Samedi />} />
     </Routes>
    </div>
  );
}

export default App;
