import React from 'react';
import './index.css';
import './App.css';
import DndProvider from './components/DnDInfo';
import Routing from './components/Routing';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return <div className='App w-screen '>
    <DndProvider> 
    <NextUIProvider>
  <Routing />
  </NextUIProvider>
    </DndProvider>
    </div>
}

export default App;
