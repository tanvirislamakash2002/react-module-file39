
import './App.css'

import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'

function App() {

  function handleClick(){
    alert('I am clicked.')
  }


  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>

      <h3>Vite + React</h3>

      <Users></Users>

      <Batsman></Batsman>

      {/* <button onclick="funcitonName()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert('click4')}>Click me 4</button>


      <button onClick={() => handleAdd5(11)}>Click Add 5</button>

      


      <Counter></Counter>

    </>
  )
}

export default App
