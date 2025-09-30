
import { useState } from 'react';
import './App.css'
import Lists from './Components/Lists/Lists'
import Navbar from './Components/Navbar'

function App() {
      const [listsItems,setListsItems]=useState([]);

const handleAdd=(e)=>{
    e.preventDefault();
    const list=e.target.name.value;
    const allReadyAdd=listsItems.find(item=>item.name !==list);

    if (allReadyAdd) {
       e.target.reset();
      return  alert ("all add it")

    }
    


    setListsItems([list,...listsItems])
    
    e.target.reset();
}

  return (
    <>
<Navbar></Navbar>
<Lists listsItems={listsItems} handleAdd={handleAdd} ></Lists>
    </>
  )
}

export default App
