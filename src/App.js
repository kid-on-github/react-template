import './App.css';
import React, {useState, /*useEffect,*/ useContext} from 'react';

const AppContext = React.createContext();

function App() {
  const [text, setText] = useState('Hello World');

  const appContext = {
    text:{
      get: text,
      set: setText
    }
  };

  return (
    <AppContext.Provider value={appContext}>
      <p>{appContext.text.get}</p>
      <TextInput/>
    </AppContext.Provider>
  );
}


// text input to update appContext's text value
function TextInput(){
  const {text} = useContext(AppContext);

  const updateText = (e) => text.set(e.target.value);

  return (
    <input type='text' value={text.get} onChange={updateText}/>
  );
}


export default App;
