import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Product from './Component/Product';
import Footer from './Component/Footer';
import AddtoCart from './Component/AddtoCart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NoteState from './context/notes/NoteState';
function App() {
  return (
   <div>
    <NoteState>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        
         <Route path="/" element={<Header/>}></Route>
         <Route path="/addtocart" element={<AddtoCart/>}></Route>

      </Routes>
      <Footer/>
     </BrowserRouter>
     </NoteState>
   </div>
  );
}

export default App;
