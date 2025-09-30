import React from 'react';

const List = ({listsItems}) => {
    return (
       <ul className=' flex flex-col justify-center '>
        {

            listsItems.map((item ,i)=>

          <li key={i}> <p >{item} <span>❌</span>
                        </p> 
                </li>
            )
        }
                
            </ul>
    );
};

export default List;       