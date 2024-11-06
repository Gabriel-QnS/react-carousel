import './App.css';
import Carousel from './carousel.js';
import logo from './logo.svg'

function Footer(){
  return (
  <div className='footer bg-dark p-2 mt-2'>
    <p className="text-light text-center">React App made by <a className='link-info' href='https://github.com/Gabriel-QnS'>Gabriel-QnS</a></p>
  </div>)
}

function App() {
  return (
    <div className='bg-light mainApp'>
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
