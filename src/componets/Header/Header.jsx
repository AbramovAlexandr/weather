import React, {useContext} from "react";
import s from "./Header.module.scss";
import {Context} from '../../utils/context/context';
import { Button, ButtonGroup, FormControlLabel, Switch, Typography } from "@mui/material";
import { TEMP_TYPE_CEL, TEMP_TYPE_FAH, TEMP_TYPE_KEL } from "../../utils/constants/type_temp";
import { Link } from "react-router-dom";

export const Header = () => {
  const {handleChangeTypeTemp, toggleTheme} = useContext(Context);
  
  const handleOnKel = () =>{
    handleChangeTypeTemp(TEMP_TYPE_KEL)
  }
  const handleOnCel = () =>{
    handleChangeTypeTemp(TEMP_TYPE_CEL)
  }
  const handleOnFah = () =>{
    handleChangeTypeTemp(TEMP_TYPE_FAH)
  }

  const handleTheme = () =>{
    toggleTheme()
  }
  
  return (
    <div className={s.header}>
     <Link to={'/'}><Typography variant="h3">Weather</Typography></Link> 
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={handleOnCel}>C°</Button>
        <Button onClick={handleOnFah}>F°</Button>
        <Button onClick={handleOnKel}>K°</Button>
      </ButtonGroup>
      <FormControlLabel control={<Switch onChange={() => handleTheme()}/>} label="Theme" />
      
    </div>
      
  );
};
