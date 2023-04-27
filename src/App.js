import logo from './logo.svg';
import './App.css';
import { MyNavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
