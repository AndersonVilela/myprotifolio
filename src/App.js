import { Header } from './components/Header';
import { Footer } from './pages/Footer';
import { Start } from './pages/Start';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Skills } from './pages/Skills';
import './styles/Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Sobre" element={<About />} />
          <Route path="/Projetos" element={<Project />} />
          <Route path="/Habilidades" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
