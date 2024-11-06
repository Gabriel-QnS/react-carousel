import logo from './logo.svg';
import './App.css';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <List name='Translation'/>
        </a>
      </header>
    </div>
  );
}

export default App;
