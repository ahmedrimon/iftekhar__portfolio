import './App.css';

// React Router Dom Use
import { Routes, Route } from "react-router-dom";

// Component Use
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Error from './component/Error/Error'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
