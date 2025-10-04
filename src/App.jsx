
import { useState } from 'react';
import './App.css'
import Lists from './Components/Lists/Lists'
import Navbar from './Components/Navbar'

function App() {
      const [listsItems,setListsItems]=useState([]);

      const handleDelete=(list)=>{
       const itemDelete=listsItems.filter(item=>item !== list)
       setListsItems(itemDelete)
       console.log(list);
       
      }
       
      
// console.log(listsItems);

const handleAdd=(e)=>{
    e.preventDefault();

    const list=e.target.name.value;
//  if (listsItems.some(item=>item === list)) {
//   return alert ('all ready add ')
//  }
    // const allReadyAdd=listsItems.filter(item=>item.name.toUpperCase() === list.toUpperCase() );

    // if (allReadyAdd) {
    //    e.target.reset();
    //   return  alert ("all add it")

    // }
    const isExit=listsItems.find((item)=>item.toLowerCase() ===list.toLowerCase())
    if (isExit) {
      return alert ('all ready add ')
    }


    // console.log(list);
    
    setListsItems([list,...listsItems])
    
    e.target.reset();
}

  return (
    <>
    <div className='max-w-4xl mx-auto flex flex-col justify-center   h-screen'>
<Navbar></Navbar>
<Lists listsItems={listsItems} handleDelete={handleDelete} handleAdd={handleAdd} ></Lists>
    </div>

    </>
  )
}

export default App
