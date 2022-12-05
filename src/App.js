import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
function App() {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Projects/>
      <Skills/>
      <Footer />
    </>
  );
}

export default App;
