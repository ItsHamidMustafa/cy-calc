import './App.css';
import { ButtonBox } from './components/ButtonBox';
import { Screen } from './components/Screen';
import React, { useState } from 'react'
import { screenContext } from './context/context';

function App() {
  const [screen, setScreen] = useState(0);

  return (
    <>
      <screenContext.Provider value={{ setScreen, screen }}>
        <div className="wrapper">
          <Screen screen={screen} />
          <ButtonBox />
        </div>
      </screenContext.Provider>
    </>
  )
}

export default App;