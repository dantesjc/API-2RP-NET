import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { IconName } from "react-icons/bs";


function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between border">
                <label>Apontar Hora Extra</label>
            </div>
            {/* linha 1 data, inicio, fim */}
            <div className="row">

            <div className="col-3 border">
                <label className="justify-content-center">Data</label>
            </div>

            <div className="col-3 border">
                <label>Início</label>
            </div>

            <div className="col-3 border">
                <label>Fim</label>
            </div>

            </div>

            {/* linha 2:inputs */}
            <div className="row">

            <div className="col-3 border">
                <input></input>
            </div>

            <div className="col-3 border">
                <input></input>
            </div>

            <div className="col-3 border">
                <input></input>
            </div>
            <div className="col-3 border">
            <Button variant="success">Confirmar</Button>
            </div>
            </div>

            {/* tabela */}
            <div className="row">

            <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Código Verba</th>
            <th>Data</th>
            <th>Hora Início</th>
            <th>Hora fim</th>
            <th>Status</th>
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
        </Sidebar>
    )
}

export default Dashboard