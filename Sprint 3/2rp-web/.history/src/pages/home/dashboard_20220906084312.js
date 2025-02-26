import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between border">
                <label>Apontar Hora Extra</label>
            </div>
            {/* linha 1 data, inicio, fim */}
            <div className="row">

            <div className="col-3 border">
                <label className="">Data</label>
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
            <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>

            </div>
        </Sidebar>
    )
}

export default Dashboard