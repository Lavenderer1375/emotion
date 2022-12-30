import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Find from './components/Find';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Lorem from './components/Lorem';
import RefrenceProvider from './components/RefContext';

function App() {
  return (
    <RefrenceProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Lorem />
        <Find />
        <Menu />
        <Contact />
      </div>
    </RefrenceProvider>
  );
}

export default App;
