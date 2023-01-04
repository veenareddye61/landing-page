
import './App.css';
import Header from './header/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Home from './home/home';
import About from './about/about';
import Services from './services/services';
import Features from './features/features';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
       
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Features/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
