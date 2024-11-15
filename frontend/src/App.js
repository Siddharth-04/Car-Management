import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';  // Assuming Home component exists
import AddCar from './components/AddCar';  // Assuming AddCar component exists
import CarList from './components/CarList';  // Assuming CarList component exists
import CarDetail from './components/CarDetail';  // Assuming CarDetail component exists
import Login from './components/Login';  // Login Component
import Register from './components/Register';  // Register Component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />  {/* Login Route */}
          <Route path="/login" element={<Login />} />  {/* Login Route */}
          <Route path="/home" element={<Home />} />
          <Route path="/add-car" element={<AddCar />} />
          {/* <Route path="/cars" element={<CarList />} /> */}
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/register" element={<Register />} />  {/* Register Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
