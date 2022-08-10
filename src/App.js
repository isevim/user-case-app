import './App.css';
import LoginView from './view/LoginView/LoginView';
import 'antd/dist/antd.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <LoginView/> */}
      <Dashboard/>
      </header>
    </div>
  );
}

export default App;
