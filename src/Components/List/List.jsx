import React from 'react';

const List = ({listsItems,handleDelete}) => {
    return (
       <ul className='list-disc  flex flex-col    '>
        {

            listsItems.map((item ,i)=> 

                  <li  key={i}> <p className='flex flex-row justify-between items-center' >{item} <span className='gap-2'  onClick={()=>handleDelete(item)}>❌</span>
                        </p> 
                </li>
            )
        }
                
            </ul>
    );
};

export default List;        