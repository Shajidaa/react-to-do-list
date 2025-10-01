import React  from 'react';
import List from '../List/List';

const Lists = ({listsItems,handleAdd,handleDelete}) => {

    return (
           <div className=' p-3 bg-amber-50 shadow-xl  flex flex-col justify-center '>
        <form onSubmit={handleAdd} 
        className='flex justify-center items-center gap-2 py-5'>
            <input name='name' type="text" placeholder="Type here" className="input input-ghost border-gray-300 border" />
            <button className='btn '>Add the list</button>
     
            
        </form >
        <div className=' mx-auto md:max-w-3xl text-center'>
 <h2 className='text-xl  font-semibold  py-2 underline '  >Your List :-  </h2>

        <List listsItems={listsItems} handleDelete={handleDelete}></List>
        </div>
        
        </div>
    );
};

export default Lists; 