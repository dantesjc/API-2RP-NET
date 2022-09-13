import Sidebar from "../../components/sidebar"
import Button from 'react-bootstrap/Button';

function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between border">
                <label>Apontar Hora Extra</label>
                <Button variant="success">Add</Button>
            </div>
        </Sidebar>
    )
}

export default Dashboard