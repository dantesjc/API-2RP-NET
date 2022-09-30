
import Sidebar from "../../../components/sidebar"
import './gestor.css'



import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import React, { Component, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import Header from "../../../components/header/header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


class MyLabel extends Component {
  render() {
    return {
      
    }
  }
}


function Gestor() {
    return (
        <Sidebar>
          <Header nome="Horas Extras"></Header>

          {/* linha 1 */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div className="">
            <span className="soli">
            <label>Solicitações hora extra</label> 
            

            </span>
            <span className="filtroLabel">
            <label>Filtro</label> <input className=""></input>
            </span>

            <div className="border">
              <label>Funcionário:</label>
              <div>
              <span className="d-flex justify-content-evenly">
                <div className="border">Data <div>07/07/07</div></div> 
                
                <div className="border">Hora inicial <div>6:11</div></div> 
                
                <div className="border">Hora final <div>18:11</div></div> 
                
                <div className="border">Ações <div>07/07/07</div><button>Aceitar</button> <button>Recusar</button></div>
              </span>

              </div>
              
            </div>

            </div>
              
          </div>
        </Sidebar>
    )
}

export default Gestor