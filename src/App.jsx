
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add'; // Import Add component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h2>User Lists</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} /> {/* Use the Add component */}
      </Routes>
    </>
  );
}

export default App;
