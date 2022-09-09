import { Header } from './components/Header';
import { Footer } from './pages/Footer';
import { Start } from './pages/Start';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Skills } from './pages/Skills';
import './styles/Global.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Start />
      <About />
      <Project />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
