import './App.css';
import React, { useState } from 'react'
import Wrapper from './components/Wrapper';
import { MenuContext } from './contexts/MenuContext';


function App() {
  const [currentMenu, setCurrentMenu] = useState();
  
  return (
    <div className="App">
      <MenuContext.Provider value={{ currentMenu, setCurrentMenu}}>
        <Wrapper />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
