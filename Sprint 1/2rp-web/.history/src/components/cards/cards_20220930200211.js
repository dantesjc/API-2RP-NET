import React from "react";
import './card.css'

function Card() {
    return(
        <div className="card-container">
            <div className="card-content">

            <div className="card-title">
                <h3>{title}</h3>
            </div>

            <div className="card-body">
            <div>
              <span className="d-flex justify-content-evenly">
                <div className="border d-flex flex-column align-items-center">Data <div>07/07/07</div></div> 
                
                <div className="border d-flex flex-column align-items-center">Hora inicial <div>6:11</div></div> 
                
                <div className="border d-flex flex-column align-items-center">Hora final <div>18:11</div></div> 
                
                <div className="border d-flex flex-column align-items-center">Ações <div><button type="button" class="btn btn-success">Aceitar</button> <button type="button" class="btn btn-danger">Recusar</button></div></div>
              </span>
              </div>            
            </div>
            
            </div>
        
        </div>
    )
}

export default Card