import './App.css';
import Carousel from './carousel.js';
import img1 from './assets/img1.jpg'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="p-2 bg-primary border-dark">An Image Carousel</h1>
      </header>
      <div className="wrapper">
      <Carousel />
      </div>
    </div>
  );
}

export default App;
