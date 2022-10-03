import Sidebar from "../../../components/sidebar"
import Header from "../../../components/header/header";
import Card from "../../../components/cards/Cards"
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
            <label>Filtro</label> <input className="mt-2"></input>
            </span>

            {/* card info hora extra */}
            <div className="d-flex flex-column aling-itens-center">
            <Card 
              title = 'Funcionário: Carlos Blaster'
            
            
            />
            </div>
            

            </div>
              
          </div>
        </Sidebar>
    )
}

export default Gestor