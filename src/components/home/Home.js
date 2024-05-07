import Header from '../header/Header.js'
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';
import './Home.css'
function Home() {
  return (
    <div style={{ backgroundColor: '#FF9933' }}>
      <Header />
      <Tours />
      <Footer />
    </div>
  )
}
export default Home;