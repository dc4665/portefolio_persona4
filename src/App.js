import './App.css';
import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import { LanguageContext } from './contexts/LanguageContext';
import { MenuContext } from './contexts/MenuContext';


function App() {
  const [currentMenu, setCurrentMenu] = useState("Profile");
  const [language, setLanguage] = useState(navigator.language);
  const value = { language, setLanguage };

  return (
    <div className="App">
      <LanguageContext.Provider value={value}>
        <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
          <Wrapper />
        </MenuContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
