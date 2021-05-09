import './App.css';
import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import { LanguageContext } from './contexts/LanguageContext';
import { MenuContext } from './contexts/MenuContext';


function App() {
  const [currentMenu, setCurrentMenu] = useState("To be removed later");
  const [language, setLanguage] = useState(navigator.language);
  console.log(language);
  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
          <Wrapper />
        </MenuContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
