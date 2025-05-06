import {HomePage} from './pages/HomePage';
import {CareerLibrary} from './pages/CareerLibrary';
import {CareerTest} from './pages/CareerTest';
import { Routes, Route } from 'react-router'; 
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/career-library" element={<CareerLibrary />} />
      <Route path="/career-test" element={<CareerTest />} />
    </Routes>

  )
}

export default App
