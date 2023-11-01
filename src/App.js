import './App.css';
import { MyNavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Libraries from './components/Libraries';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Libraries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// created with https://www.youtube.com/watch?v=hYv6BM2fWd8
