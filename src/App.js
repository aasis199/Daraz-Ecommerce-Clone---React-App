import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Slider from './components/Slider/Slider';
import Card from './components/Card/Card';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Sale from './components/DailySale/Sale';

function App() {
  return (
    <div className="App">
     <Navbar />
<main>

     <Slider />
     <img src="https://icms-image.slatic.net/images/ims-web/e6d679c4-55a1-401a-9ac3-deb2aeec04bb.gif" className="offer-gif d-none d-lg-block"></img>
     <Card />

     <Container className="top-15">
     <h3 className="p-2">Flash Sale</h3>
     </Container>

    <Container className="top-15-white">
     <Sale/>
     <Products />
    </Container>

    <Container className="top-15-white mt-4 mb-5">
    <h3 className="p-2">Just for you</h3>
    <Products />
    <Products />

    </Container>
</main>
     <Footer />
    </div>
  );
}

export default App;





