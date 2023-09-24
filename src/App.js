import React from 'react';
import './index.css';
import './App.css';
import Screen from './pages/Screen';
import DndProvider from './components/DnDInfo';


function App() {
  return <div className='App w-screen '>
    <DndProvider> 
    <Screen />
    </DndProvider>
    </div>
}

export default App;
