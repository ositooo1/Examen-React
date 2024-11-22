import { useState } from 'react'
import './App.css'

function change(){
  let clickCount = 0
alert('hola soy la maquina y no creo que el tesoro este aca')
  clickCount+=1 
console.log(clickCount);

}





    function App(){
const [valor,setValor] = useState(0)
      return(
        
<div className='tablero'>
<div className='tesoro' onClick={change}>□</div>
<div className='2' onClick={change}>□</div>
<div className='3' onClick={change}>□</div>
<div className='4' onClick={change}>□</div>
<div className='5' onClick={change}>□</div>
<div className='6' onClick={change}>□</div>
<div className='7' onClick={change}>□</div>
<div className='8' onClick={change}>□</div>
<div className='9' onClick={change}>□</div>
<div className='10' onClick={change}>□</div>
<div className='11' onClick={change}>□</div>
<div className='12' onClick={change}>□</div>
<div className='13' onClick={change}>□</div>
<div className='14' onClick={change}>□</div>
<div className='15' onClick={change}>□</div>
<div className='16' onClick={change}>□</div>
<div className='17' onClick={change}>□</div>
<div className='18' onClick={change}>□</div>
<div className='19' onClick={change}>□</div>
<div className='20' onClick={change}>□</div>
<div className='21' onClick={change}>□</div>
<div className='22' onClick={change}>□</div>
<div className='23' onClick={change}>□</div>
<div className='24' onClick={change}>□</div>
<div className='25' onClick={change}>□</div>

</div>

      )


}

export default App

