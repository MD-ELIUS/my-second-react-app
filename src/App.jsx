
import './App.css'
import Batsman from './Batsman'
import Counter from './counter'
function App() {

  function handleClick() {
    alert('I am clicked button 1 using external function')
  }

  const handleClick3 = () => {
       alert('I am clicked button 3 using external arrow function')
  }

  const handleClick5 = (num) => {
     const newNum = num + 5 ;
     alert(newNum)
  }


  return (
    <>
     
      <h3>Vite + React</h3>
      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button></button>  */}
      <button onClick={handleClick}>Click Me</button>
      <button style={{margin:"20px"}} onClick={function handleClick2() {
        alert('I am clicked button 2 using internal function')
      }}>Click Me</button>
    
       <button onClick={handleClick3}>Click Me</button>

        <button style={{margin:"20px"}} onClick={() => {
        alert('I am clicked button 4 using internal arrow function')
      }}>Click Me</button>

       <button onClick={() =>handleClick5(10)}>Click Me</button> 
       {/* npm run// if need to pass a parameter */}

    </>
  )
}

export default App
