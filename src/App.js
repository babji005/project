import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import New from './components/New';
import content from "../src/components/mock/Mock"
import Sys from './components/Sys';
// import App from "../src/function/App"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sys />
        {/* <App/> */}
        {/* <Main content={this.props.content} /> */}
        {/* <New/> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

// App.defaultProps = {
//   content: content,
// };
export default App;
