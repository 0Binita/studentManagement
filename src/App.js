import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Form from './components/form';
import Table from './components/denseTable';
import Course from './components/course';

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path='/course' element={<Course/>}/>
    </Routes>
    </div>
    </Router>

  );
}

export default App;
