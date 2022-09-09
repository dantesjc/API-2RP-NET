import { Drawer, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import powertech from '../assets/powertech.png'

import React from 'react'

function Sidebar({ children }) {
    const theme = useTheme();

    return (
        <>

            <Drawer variant='permanent'>
<<<<<<< Updated upstream
                <Box width={theme.spacing(30)} height={theme.spacing(100)} className ='side-bar'>
                      <div className='texto'>
                        <ul >
                            <br />
                            <br />
                            <br />
                            <br />
                                <Link to='/dashboard' className ='side-links'>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    Dashboard
                                </Link>
                                <br />
                                <br />
                                <Link to='/horaextra' className ='side-links'>
                                    Apontar Hora Extra
                                </Link>
                                <br />
                                <br />
                                <Link to='/sobreaviso' className ='side-links'>
                                    Apontar sobre aviso
                                </Link>
                        </ul>
=======
                <Box width={theme.spacing(31)} height={theme.spacing(100)} className ='side-bar'>
                    <div className='texto'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to='/dashboard' className ='side-links'>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            Dashboard
                        </Link>
                        <br />                                
                        <br />
                        <Link to='/horaextra' className ='side-links'>
                            &nbsp;
                            Apontar Hora Extra
                        </Link>
                        <br />
                        <br />
                        <Link to='/sobreaviso' className ='side-links'>
                            &nbsp;
                            Apontar sobre aviso
                        </Link>
>>>>>>> Stashed changes
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <img src={require('../assets/powertech.png')} height='140px' width='60%' />
                    </div>
                </Box>
            </Drawer>
<<<<<<< Updated upstream
            <Box height="100vh" marginLeft={theme.spacing(30)}>
=======
            <Box height="100vh" marginLeft={theme.spacing(31)}>
>>>>>>> Stashed changes

                {children}
            </Box>
        </>
    );
}

export default Sidebar