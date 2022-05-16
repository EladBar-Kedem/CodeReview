import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login'
import {  BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import Codeblock from './components/Codeblock';
import {Lobby} from './components/Lobby';
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  console.log('bk test', process.env.bktest);
  return (
    <Provider store={store}>
        <Router>
        <div className='App'>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Login />}/>     
            <Route exact path="/lobby" element={<Lobby/>}/>
            <Route exact path="/sessions/:id" element={<Codeblock/>}/>
          </Routes>
        </div>  
          
      </Router> 
    </Provider>
  );
}

export default App;
