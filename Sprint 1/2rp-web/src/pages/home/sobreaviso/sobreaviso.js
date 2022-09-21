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

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import './sobreaviso.css'
import { createBreakpoints } from "@mui/system";

function Sobreaviso() {
    const [value, setValue] = useState({
        code: '3016',
        status: 'Pendente'
    });
    const [selectedDate, setDate] = useState(dayjs(new Date()))
    const [selectedStart, setStart] = useState(dayjs(new Date()))
    const [selectedEnd, setEnd] = useState(dayjs(new Date()))
    const [open, setOpen] = React.useState(false);
    const [textSnack, setTextSnack] = React.useState('');
    const [colorSnack, setColorSnack] = React.useState('');

    const handleChange = (value) => {
        setValue(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
    });


    const openSnack = (text, color) => {
        setOpen(true);
        setTextSnack(text)
        setColorSnack(color)
    };

    const closeSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [form, setForm] = useState({
        code: '',
        data: '',
        start: '',
        end: '',
        status: '',
        delete: ''
    })


    const setFormData = () => {
        setForm({
            code: value.code,
            data: selectedDate.$d.getDate() + "/" + (selectedDate.$d.getMonth() + 1) + "/" + selectedDate.$d.getFullYear(),
            start: selectedStart.$d.getHours() + ':' + selectedStart.$d.getMinutes(),
            end: selectedEnd.$d.getHours() + ':' + selectedEnd.$d.getMinutes(),
            status: "Pendente",
            delete: <button className="ml-4" onClick={deleteForm}><i class="bi bi-trash3"></i></button>
        })
    }

    const deleteForm = () => {
        setForm({
            code: '',
            data: '',
            start: '',
            end: '',
            status: '',
            delete: ''
        })

        openSnack('Deletado com sucesso', 'error')
    }

    const submit = () => {
        openSnack('Sobreaviso cadastrada com sucesso', 'success')
        setFormData();
    }


    return (
        <Sidebar>
            <Header nome="Apontar Sobreaviso"></Header>
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
                                    readonly disabled
                                    value={value.code}
                                    onChange={handleChange}>
                                    <MenuItem value={3016}>3016</MenuItem>
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
                                <TimePicker
                                    // <TimePicker readOnly disabled
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
                            onClick={() => submit()
                            }>Confirmar</Button>
                    </div>
                </div>


                {/* tabela */}
                <div className="row justify-content-center  col-md-10  mt-5">

                    <Table striped bordered hover responsive >
                        <thead >
                            <tr>
                                <th className="col-md-2 ">Código Verba</th>
                                <th className="col-md-2">Data</th>
                                <th className="col-md-2">Hora Início</th>
                                <th className="col-md-2">Hora fim</th>
                                <th className="col-md-2">Status</th>
                                <th className="col-md-1">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{form.code}</td>
                                <td>{form.data}</td>
                                <td>{form.start}</td>
                                <td>{form.end}</td>
                                <td>{form.status}</td>
                                <td>{form.delete}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={closeSnack}>
                <Alert onClose={closeSnack} severity={colorSnack} sx={{ width: '100%' }}>
                    {textSnack}
                </Alert>
            </Snackbar>
        </Sidebar >
    )
}


export default Sobreaviso