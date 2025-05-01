import './App.css'
// import { useState, useEffect } from 'react'
import LoggerComponents from './components/LoggerComponents';
import TimerComponents from './components/TimerComponents';
import DataFetcher from './components/DataFetcher';
import MultiEffectComponents from './components/MultiEffectComponents';
import ResizeComponents from './components/ResizeComponents';

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

// variation 1
// run on every render
  // useEffect(() => {
  //   alert('I will run on every render');
  // })
  
// variation 2
// that runs on only first render
  // useEffect(() => {
  //   alert('I will run on first render');
  // }, [])

// variation 3
// that runs on every render but only when count is updated
  // useEffect(() => {
  //   alert('I will run every time count is updated');
  // }, [count])

// variation 4
// multiple dependencies
  // useEffect(() => {
  //   alert('I will run every time count/total is updated');
  // }, [count, total])


// variation 5
// clean up function
  // useEffect(() => {
  //   alert('count is updated');
  //   return () => {
  //     alert('count is unmounted from UI');
  //   }
  // }, [count])

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <>
    
    <LoggerComponents />
    <TimerComponents />
    <DataFetcher />
    <MultiEffectComponents />
    <ResizeComponents />

    {/* <div>
        <h3>Count is: {count}</h3>
        <button onClick={handleClick}>Update Count</button>

        <br /><br />

        <h3>Update Total: {total}</h3>
        <button onClick={handleClickTotal}>Update Total</button>
      </div> */}
    </>
  )
}

export default App
