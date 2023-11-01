import './App.css';
import { MyNavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Libraries } from './components/Libraries';
import { DataVisualizations } from './components/DataVisualizations';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Libraries />
      <DataVisualizations />
      <Footer />
    </div>
  );
}

export default App;
