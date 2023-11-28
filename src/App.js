import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import Contact from './components/Contact';
import ScrollToTopButton from './components/scrollBtn';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Welcomepage />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
