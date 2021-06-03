import './App.css';
import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import { LanguageContext } from './contexts/LanguageContext';
import { MenuContext } from './contexts/MenuContext';
import WarningMobile from './components/WarningMobile';

function App() {
  const [currentMenu, setCurrentMenu] = useState("Profile");
  const [language, setLanguage] = useState(navigator.language);
  const value = { language, setLanguage };

  function deviceType(){
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
  };

  const device = deviceType();

  if(device === "mobile") {
    return (
      <div className="App">
        <LanguageContext.Provider value={value}>
          <WarningMobile />
        </LanguageContext.Provider>     
      </div>
    )
  } else {
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
}

export default App;
