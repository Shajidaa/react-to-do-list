import React  from 'react';
import List from '../List/List';

const Lists = ({listsItems,handleAdd,handleDelete}) => {

    return (
           <div className='w-11/12 mx-auto flex flex-col justify-center '>
        <form onSubmit={handleAdd} 
        className='flex justify-center items-center gap-2 py-5'>
            <input name='name' type="text" placeholder="Type here" className="input input-ghost border-gray-300 border" />
            <button className='btn '>Add the list</button>
     
            
        </form >
         <h2 className='text-xl  font-semibold  py-2 underline text-center'  >Your List  </h2>

        <List listsItems={listsItems} handleDelete={handleDelete}></List>
        </div>
    );
};

export default Lists; 