import { Drawer, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import './Sidebar.css'
import { Link } from 'react-router-dom'

import React from 'react'

function Sidebar({ children }) {
    const theme = useTheme();




    return (
        <>

            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height={theme.spacing(100)} className ='side-bar  '>
                     <div className='texto mt-5'>
                        
                                {/* <Link to='/dashboard' className ='side-links mt-4'>
                                    Dashboard
                                </Link>
                                <Link to='/horaextra' className ='side-links mt-4'>
                                    Apontar Hora Extra
                                </Link>
                                <Link to='/sobreaviso' className ='side-links mt-4' >
                                    Apontar Sobreaviso
                                </Link> */}

                                {/* Associar a lista de link */}
                                {/* <Link to='/gestor-dashboard' className ='side-links mt-4' >
                                    Dashboard
                                </Link> */}
                                <Link to='/gestor' className ='side-links mt-4' >
                                        Aprovar Hora Extra
                                </Link>
                                <Link to='/gestor-sobreaviso' className ='side-links mt-4' >
                                    Aprovar Sobreaviso
                                </Link>    
                                <Link to='/gestor-historico' className ='side-links mt-4' >
                                    Histórico
                                </Link>


                                <Link to='/login' className ='side-links mt-4' >
                                    Sair
                                </Link>
                                
                    </div>
                    <div className='footer'>
                        <img src={require('../assets/powertech.png')} height='140px' width='160px' />
                    </div>
                </Box>
            </Drawer>
            
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}

export default Sidebar