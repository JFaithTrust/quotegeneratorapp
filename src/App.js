import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState([])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((res) =>{
      const { advice } = res.data.slip
      setAdvice(advice)
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  
  return (
    <div className='app'>
      <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={() => fetchAdvice()}>
          Give Me Advice
        </button>
      </div>
    </div>
  );
}

export default App;
