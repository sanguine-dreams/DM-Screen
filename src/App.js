import React from 'react';
import './App.css';
import Screen from './pages/Screen';
import DndProvider from './components/DnDInfo';


function App() {
  return <div className='App'>
    <DndProvider>
    <Screen />
    </DndProvider>
    </div>
}

export default App;
