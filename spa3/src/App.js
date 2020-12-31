import logo from './gitkraken.svg';
import bg from './ko.jpeg';
import './color.css';
import './typography.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"><hr/>    
      <h1><b>Welcome!</b></h1>
          <p><i><strong>"Press button below for complete access to ryans portforlio."</strong></i></p>
          <hr/>
          <br/>
        <img src={logo} className="App-gitkraken" alt="git" /><br/> 
        <hr/>
        <button class="rounded"><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >          
          get started        
        </a></button>
        <hr/>
        <br/>
        <h3><u>ryanhanrahan71@outlook.com</u></h3>
            <h3><u>1+(442)-202-0595</u></h3>
      </header>
    </div>
  );
}

export default App;
