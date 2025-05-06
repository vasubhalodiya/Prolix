import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice';
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  }

  const handleDecrementClick = () => {
    dispatch(decrement());
  }

  const handleResetClick = () => {
    dispatch(reset());
  }

  const handleIncAmount = () => {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <h1>Count: {count}</h1>

      <div className="button-group">
        <button className="btn" onClick={handleDecrementClick}>-</button>
        <button className="btn" onClick={handleIncrementClick}>+</button>
        <button className="btn" onClick={handleResetClick}>Reset</button>
      </div>

      <div className="input-group">
        <input type="number" placeholder="Enter number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button className="btn" onClick={handleIncAmount}>Set Count</button>
      </div>
    </div>
  );
};

export default App
