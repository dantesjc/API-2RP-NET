
import Sidebar from "../../../components/sidebar"
import './gestor.css'



import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import React, { useEffect, useState } from 'react';
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


function Gestor() {
    return (
        <Sidebar>
          <Header nome="Horas Extras"></Header>

          {/* linha 1 */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div className="d-flex flex-column justify-content-between">

            <label>Solicitações hora extra</label> <label>filtro</label> <input className="filtro ml-2"></input>
            

            </div>
              
          </div>
        </Sidebar>
    )
}

export default Gestor