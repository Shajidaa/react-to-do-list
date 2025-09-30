import React from 'react';

const List = ({listsItems,handleDelete}) => {
    return (
       <ul className=' flex flex-col justify-center '>
        {

            listsItems.map((item ,i)=>

          <li key={i}> <p >{item} <span onClick={()=>handleDelete(item)}>❌</span>
                        </p> 
                </li>
            )
        }
                
            </ul>
    );
};

export default List;       