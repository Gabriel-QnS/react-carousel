import './App.css';
import Carousel from './carousel.js';
import logo from './logo.svg'

function List(props){
  return (
    <ol className='bg-primary text-light p-4'>
      <h1>This is a source of information for {props.name}</h1>
      <li>Option One</li>
      <li>Option Two</li>
      <li>Option Three</li>
    </ol>
  );
}

function Footer(){
  return (
  <div className='footer bg-dark border border-red mt-2'>
    <p className="text-light text-center">React App made by <a className='link-warning' href='https://github.com/Gabriel-QnS'>Gabriel-QnS</a></p>
  </div>)
}

function App() {
  return (
    <div className='bg-warning'>
      <header className="App-header border-bottom-4 border-light mb-2">
        <h1 className="p-2 border-dark">An Image Carousel</h1>
        <img className="react-logo" src="logo"></img>
      </header>
      <div className="wrapper bg-dark">
      <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
