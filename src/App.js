import './App.css';
import About from './components/About';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react';
import Alert from './components/Alert';
function App() {
  const [mode,setMode]=React.useState('light')
  const modeHandler=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      alertHandler("Dark mode has been called",'dark')
      document.title="TextUtils-Dark Mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      alertHandler("Light mode has been called",'light')
      document.title="TextUtils-Light Mode"
    }
  }
  const [alert,setAlert]=React.useState(null)
  const alertHandler=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <div className="App">
      <Navbar mode={mode} modeHandler={modeHandler}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<Textform mode={mode} modeHandler={modeHandler} alertHandler={alertHandler} title="Welcome"/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
