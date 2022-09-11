import React,{useState} from 'react'
import Form from './components/Form';
import Card from './components/Card';
import Thanks from './components/Thanks';
import './App.css';


function App() {

  const [cardForm, setCardForm] = useState({});
  const [complete, setComplete] = useState(false);

  return (
    <div className="App">
      <Card cardForm={cardForm}/>
      { complete ? <Thanks setComplete={setComplete}/> : <Form setCardForm={setCardForm} setComplete={setComplete}/>}
    </div>
  );
}

export default App;
