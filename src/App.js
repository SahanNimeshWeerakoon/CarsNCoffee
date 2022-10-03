import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Shop from './Components/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import EventID from './Components/EventID';

function App() {
  return (
    <div  >
      <div id = 'content'>
      <BrowserRouter>
       <Routes>
        <Route path ='/' element ={<Dashboard/>}/>
        <Route path ='/shop' element ={<Shop/>}/>
        <Route path ='/events' element ={<Events/>}/>
        <Route path ='/events/:id' element ={<EventID/>}/>
        <Route path ='/gallery' element ={<Gallery/>}/>
        <Route path ='/contact-us' element ={<ContactUs/>}/>
        </Routes></BrowserRouter>
      </div>
    </div>
  );
}

export default App;
