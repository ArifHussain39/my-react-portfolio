import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import {BuyerReviews,SellerReviews} from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Welcomepage />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/buyer-review" element={<BuyerReviews />} />
        <Route path="/seller-review" element={<SellerReviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
