import Sidebar from "../../../../components/sidebar"
import Header from "../../../../components/header/header";
import Historico from "../../../../components/cards/Historico"
import './gestor-sobreaviso.css'

import React, { Component, useEffect, useState } from 'react';


function GestorHistorico() {
    return (
        <Sidebar>
          <Header nome="Histórico"></Header>

          {/* linha 1: solitações, filtro */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div>
            <span className="soli">
            <label className="font">Solicitações</label> 
            </span>

            <span className="filtroLabel">
            <label className="font">Filtro</label> <input className="mt-4 mb-4 ml-2"></input>
            </span>

            {/* card info historico */}
            <div className="d-flex flex-column aling-itens-center">
            <Historico 
              Funcionario = "Carlos Blaster"
              Data = "25/10/11"
              HoraInicial = "11:00"
              HoraFinal = "17:00"
              Status = "Aprovado"
            />

            <Historico 
              Funcionario = "Carlos Magno"
              Data = "26/10/11"
              HoraInicial = "12:00"
              HoraFinal = "18:00"
              Status = "Recusado"
            />

            <Historico 
              Funcionario = "Is me is me Diego Brance"
              Data = "26/10/11"
              HoraInicial = "12:00"
              HoraFinal = "18:00"
              Status = "Aprovado"
            />
            </div>
            

            </div>
              
          </div>
        </Sidebar>
    )
}

export default GestorHistorico