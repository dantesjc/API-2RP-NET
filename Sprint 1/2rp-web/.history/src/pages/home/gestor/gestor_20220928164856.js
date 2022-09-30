import React from 'react'
import Sidebar from "../../../components/sidebar"
import Header from '../../../components/header/header'

function Gestor() {
    return (
        <Sidebar>
          <Header nome="Horas Extras"></Header>

          {/* linha 1 */}
          <div className="d-flex flex-column align-items-center">
                <div className="row justify-content-center align-items-center col-md-10 mt-4">
                <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Verba</InputLabel>
                                </FormControl>
                        </Box>
                </div>
            </div>
        </Sidebar>
    )
}

export default Gestor