import './App.css'
import {  Route, Routes} from 'react-router-dom';
import Home from './Home'
import Register from './Register';
import ContactUs from './ContactUs';
import NotFound from './NotFound';

function App() {
  

  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default App
