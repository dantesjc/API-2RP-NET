import Sidebar from "../../components/sidebar"

function Dashboard() {
    return (
        <Sidebar>
            <div className="d-flex justify-content-between">
                <label>Horários</label>
                <button>+ Adicionar</button>
            </div>
        </Sidebar>
    )
}

export default Dashboard