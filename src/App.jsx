import React, { useState } from "react";
import Main from "./componets/Main/Main";
import { Context } from "./context/context";
import './App.css'

const App = () => {
  const [typeTemp, setTypeTemp] = useState('cel');
  const [typeTheme, setTypeTheme] = useState(true);

  const handleChangeTypeTemp = (type) =>{
    setTypeTemp(type)
  }

  const toggleTheme = () =>{
    setTypeTheme(!typeTheme)
  }
  console.log(typeTheme)
  return (
    <Context.Provider value={{typeTemp, handleChangeTypeTemp, toggleTheme, typeTheme}}>
      <Main />
    </Context.Provider>
  );
};
export default App;
