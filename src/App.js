import './App.css';
import Carousel from './carousel.js';
import logo from './logo.svg'

function Footer(){
  return (
  <div id="footer" className='footer bg-dark p-2 mt-2'>
    <p className="text-light text-center">React App made by <a className='link-info' href='https://github.com/Gabriel-QnS'>Gabriel-QnS</a></p>
  </div>)
}

function NavBar(){
  return (
    <nav id="navBar" className="bg-dark">
      <ul id="nav-ul">
        <a className="link-info" href="#home">
        <li>Home</li>
        </a>
        <a className="link-info" href="#carousel">
        <li>App</li>
        </a>
        <a className="link-info" href="#footer">
        <li>Footer</li>
        </a>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className='bg-light mainApp' id="home">
      <NavBar />
      <header className="App-header border-bottom-4 border-light mb-2">
        <h1 className="p-2 border-dark">An Image Carousel</h1>
        <h3>Made with <span>React</span></h3>
        <img style={{maxWidth: "20vw"}} className="react-logo" src={logo}></img>
      </header>
      <div className="wrapper bg-dark">
      <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
