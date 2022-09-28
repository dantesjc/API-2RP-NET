import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';

function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between border">
                <label>Apontar Hora Extra</label>
                <Button variant="success">Add</Button>
            </div>
            {/* linha 1 data, inicio, fim */}
            <div className="row">

            <div className="col-3 border">
                <label>Data</label>
            </div>

            <div className="col-3 border">
                <label>Inicio</label>
            </div>

            <div className="col-3 border">
                <label>Fim</label>
            </div>

            </div>

            {/* linha 2:inputs */}
            <div className="row">

            <div className="col-3 border">
                <input>Data</input>
            </div>

            <div className="col-3 border">
                <input>Inicio</input>
            </div>

            <div className="col-3 border">
                <input>Fim</input>
            </div>
            </div>
        </Sidebar>
    )
}

export default Dashboard