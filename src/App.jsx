import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AddNew from './pages/Addnew'
import About from './pages/About'
import Contact from './pages/Contact'
import dataBase from './components/db'

function App() {
  const { fruits, addFruit, deleteFruit, updateFruit } = dataBase();
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home fruits={fruits} onDelete={deleteFruit} onUpdate={updateFruit}/>} />
        <Route path="/add" element={<AddNew onAdd={addFruit} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <NavBar />
    </>
  )
}

export default App
