import Sidebar from "../../../components/sidebar"
import Header from "../../../components/header/header";
import './gestor.css'

import React, { Component, useEffect, useState } from 'react';



class MyLabel extends Component {
  render() {
    return {
      
    }
  }
}



function Gestor() {
    return (
        <Sidebar>
          <Header nome="Horas Extras"></Header>

          {/* linha 1 */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div className="">
            <span className="soli">
            <label>Solicitações hora extra</label> 
            

            </span>
            <span className="filtroLabel">
            <label>Filtro</label> <input className=""></input>
            </span>

            {/* card info hora extra */}
            <div className="border">
              <label className="ml-4">Funcionário:</label>
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
        </Sidebar>
    )
}

export default Gestor