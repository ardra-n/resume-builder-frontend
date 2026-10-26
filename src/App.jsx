
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Info from './pages/Info'
import Saved from './pages/Saved'
import View from './pages/View'
import Download from './pages/Download'
import Pnf from './pages/Pnf'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/resume-details' element={<Info/>}/>
        <Route path='/all-resumes' element={<Saved/>}/>
        <Route path='/resumes/:id' element={<View/>}/>
        <Route path='/downloads' element={<Download/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
