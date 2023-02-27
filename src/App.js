import logo from './logo.svg';
import './App.css';
//import Saludo from './components/pure/saludo';
//import SaludoFun from './components/pure/saludoFun';
//import TaskListComponent from './components/container/task_list';*
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* my component
         <Saludo name='Martin'></Saludo>
        
        <SaludoFun name='Martin'></SaludoFun>

        <TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
