import Sidebar from "../../../components/sidebar"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import './hora-extra.css'
import { createBreakpoints } from "@mui/system";

function HoraExtra() {
    const [value, setValue] = useState({
        code: '',
        status: 'Pendente'
    });
    const [selectedDate, setDate] = useState(dayjs(new Date()))
    const [selectedStart, setStart] = useState(dayjs(new Date()))
    const [selectedEnd, setEnd] = useState(dayjs(new Date()))

    const handleChange = (value) => {
        setValue(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const apontamento = [{
        code: '1809'
    }]

    let formData = {
        code: '',
        data: '',
        start: '',
        end: '',
        status: ''
    }

    const setFormData = (form) => {
        form.code = value.code
        form.data = selectedDate.$d.getDate() + "/" + (selectedDate.$d.getMonth() + 1) + "/" + selectedDate.$d.getFullYear();
        form.start = selectedStart.$d.getHours() + ':' + selectedStart.$d.getMinutes()
        form.end = selectedEnd.$d.getHours() + ':' + selectedEnd.$d.getMinutes()
        form.status = value.status
        
    }

    const submit = (form) => {
        setFormData(form);
        console.log(form)

    }

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
                                    label="Código verba"
                                    name="code"
                                    value={value.code}
                                    onChange={handleChange}>
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
                                    value={selectedDate}
                                    name="date"
                                    onChange={date => setDate(date)}
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
                                    value={selectedStart}
                                    onChange={start => setStart(start)}
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
                                    value={selectedEnd}
                                    onChange={end => setEnd(end)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </div>

                    <div className="col-3 mt-3">
                        <Button variant="success"
                            disabled={value.code == ''}
                            onClick={() => submit(formData)
                            }>Confirmar</Button>
                    </div>
                </div>

                {/* tabela */}
                <div className="row justify-content-center  col-md-10  mt-5">

                    <Table striped bordered hover responsive >
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
                                <td>{value.code}</td>
                                <td>{formData.data}</td>
                                <td>{formData.start}</td>
                                <td>{formData.end}</td>
                                <td>{formData.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Sidebar >
    )
}

export default HoraExtra