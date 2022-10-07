import React from "react";
import './Cards.css'

function Card(props) {
    return(
        <div className="card-container mb-3">
            <div className="card-content">

            <div className="card-title ml-2 mt-2">
                <h5>Funcionário: {props.Funcionario}</h5>
            </div>

            <div className="card-body">
            <div>
              <span className="d-flex justify-content-evenly">
                <div className="d-flex flex-column align-items-center"><b>Data</b><div>{props.Data}</div></div> 
                
                <div className="d-flex flex-column align-items-center"><b>Hora inicial</b><div>{props.HoraInicial}</div></div> 
                
                <div className="d-flex flex-column align-items-center"><b>Hora final</b><div>{props.HoraFinal}</div></div> 
                
                <div className="d-flex flex-column align-items-center mb-3"><b>Ações</b><div><button type="button" class="btn btn-success mt-1">Aceitar</button> <button type="button" class="btn btn-danger mt-1">Recusar</button></div></div>
              </span>
              </div>            
            </div>

            </div>
        
        </div>
    )
}

export default Card