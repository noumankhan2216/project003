import React from 'react';
import ReactDOM from 'react-dom';

function Hi(){
  return <div><strong>Hello Nouman</strong>
         <h2>How are you man ?</h2>
         <ul>
           <li>Orange</li>
           <li>Apple</li>
           <li>Banana</li>
           <li>Grapes</li>
         </ul>

         {5 + 10}
         </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));