import { Header } from './components/Header';
import { Start } from './pages/Start';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Skills } from './pages/Skills';
import './styles/Global.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <About />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
