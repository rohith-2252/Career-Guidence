import {HomePage} from './pages/HomePage';
import {CareerLibrary} from './pages/CareerLibrary';
import { Routes, Route } from 'react-router'; 
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="career-library" element={<CareerLibrary />} />
    </Routes>

  )
}

export default App
