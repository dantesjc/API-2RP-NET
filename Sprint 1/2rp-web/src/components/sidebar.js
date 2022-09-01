import { Drawer, useTheme } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'

function Sidebar({ children }) {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)}>
                    Criar sidebar aqui

                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>

                {children}
            </Box>
        </>
    );
}

export default Sidebar