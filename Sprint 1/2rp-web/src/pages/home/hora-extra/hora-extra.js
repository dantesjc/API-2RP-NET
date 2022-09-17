import Sidebar from "../../../components/sidebar"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import Header from "../../../components/header/header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './hora-extra.css'

function HoraExtra() {
    const [value, setValue] = React.useState(dayjs(new Date()));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [code, setCode] = React.useState('');

    const handleCode = (event) => {
        setCode(event.target.value);
    };

    return (
        <Sidebar>
            <Header nome="Apontar hora extra"></Header>
            {/* linha 1 data, inicio, fim */}
            <div className="d-flex flex-column align-items-center">
                <div className="row justify-content-center align-items-center col-md-10 mt-4">

                    <div className="col-md-2 col-sm-10 mt-3">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Verba</InputLabel>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={code}
                                    label="Código verba"
                                    onChange={handleCode}>

                                    <MenuItem value={1601}>1601</MenuItem>
                                    <MenuItem value={1602}>1602</MenuItem>
                                    <MenuItem value={1809}>1809</MenuItem>
                                    <MenuItem value={3000}>3000</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="col-md-2 col-sm-10 mt-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DesktopDatePicker label="Data"
                                    inputFormat="DD/MM/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                >
                                </DesktopDatePicker>
                            </Stack>
                        </LocalizationProvider>
                    </div>

                    <div className="col-md-2 col-sm-10 mt-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={5}>
                                <TimePicker
                                    label="Inicio"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </div>

                    <div className="col-md-2 col-sm-10 mt-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <TimePicker readOnly disabled
                                    label="Fim"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </div>

                    <div className="col-3 mt-3">
                        <Button variant="success">Confirmar</Button>
                    </div>
                </div>


                {/* tabela */}
                <div className="row justify-content-center  col-md-10  mt-5">

                    <Table striped bordered hover responsive className="">
                        <thead >
                            <tr>
                                <th className="col-md-2">Código Verba</th>
                                <th className="col-md-2">Data</th>
                                <th className="col-md-2">Hora Início</th>
                                <th className="col-md-2">Hora fim</th>
                                <th className="col-md-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1802</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Sidebar>
    )
}

export default HoraExtra