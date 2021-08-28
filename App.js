import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';

function App() {

  const [showItem, setShowItem] = useState(false)

  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? <StripeContainer /> : <><h3>$10.00</h3> <img src="https://t3.ftcdn.net/jpg/01/43/44/82/360_F_143448279_wQqWiEEsMSswzXmUya6Il9cOYhLiq9zd.jpg" alt="Spatula" /><button onClick={() => setShowItem(true)}>Purchase Spatula</button></>}
    </div>
  );
}

export default App;
