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
                <Box width={theme.spacing(28)} height={theme.spacing(100)} className ='side-bar'>
                     <div className='texto'>
                        
                                <Link to='/dashboard' className ='side-links1'>
                                    Dashboard
                                </Link>
                                <Link to='/horaextra' className ='side-links2'>
                                    Apontar Hora Extra
                                </Link>
                                <Link to='/sobreaviso' className ='side-links3'>
                                    Apontar sobre aviso
                                </Link>
                        
                    </div>
                    <div>
                        <img src={require('../assets/powertech.png')} height='140px' width='60%' className='logo'/>
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