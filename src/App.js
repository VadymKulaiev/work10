import { useState } from 'react';
import ModalWindow from './components/ModalWindow/ModalWindow';
import "./App.css";

function App() {

  const[modalState, setModalState] = useState(false);
  const[currentId, setCurrentId] = useState('');
  const[data, setData] = useState([
   {
    name: 'Andriy',
    id: '0'
   },
   {
    name: 'Oleg',
    id: '1'
   },
   {
    name: 'Anton',
    id: '2'
   },
   {
    name: 'Vadym',
    id: '3'
   }
  
  ])

  const removeUser = (id) => {
    setCurrentId(id);
    setModalState(true);
  }


  return (
    <div className="App">
      <ModalWindow 
      call = {modalState} 
      currentUserId={currentId} 
      onDestroy={() => setModalState(false)}
      users={data}
      onDeleteUserFromData={setData}
      />
      <button className='open_modal' onClick={() => setModalState(true)}>Open Modal</button>

      <div className='users'>
      <ul>
        {data.map(obj => {
          return <li key={obj.id}>
            {obj.name}
            <button className='remove' onClick={() => removeUser(obj.id)}>X</button>
            </li>
        })}
      </ul>
      </div>

      
    </div>
  );
}

export default App;
