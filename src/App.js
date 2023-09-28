import React from 'react';
import './index.css';
import './App.css';
import DndProvider from './components/DnDInfo';
import Routing from './components/Routing';


function App() {
  return <div className='App w-screen '>
    <DndProvider> 
  <Routing />
    </DndProvider>
    </div>
}

export default App;
