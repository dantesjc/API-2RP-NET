import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';

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
        </Sidebar>
    )
}

export default Dashboard