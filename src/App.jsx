import React, { useState } from "react";
import { Context } from "./utils/context/context";
import './App.css'
import Main from "./views/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Header } from "./componets/Header/Header";
import {  QueryClient, QueryClientProvider } from "react-query";
import { Container } from "./views/DescriptionWeatherCity/Container";
const App = () => {
  const [typeTemp, setTypeTemp] = useState('cel');
  const [typeTheme, setTypeTheme] = useState(true);

  const handleChangeTypeTemp = (type) =>{
    setTypeTemp(type)
  }

  const toggleTheme = () =>{
    setTypeTheme(!typeTheme)
  }


  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{typeTemp, handleChangeTypeTemp, toggleTheme, typeTheme}}>
        <Header/>
          <Routes>
            <Route path="/"  
              element={ 
                  <Main/>
              }/>
            <Route path=":id" element={<Container/>}/>
        </Routes>
      </Context.Provider>
    </QueryClientProvider>
   
    </>
    
    
    
  );
};
export default App;
