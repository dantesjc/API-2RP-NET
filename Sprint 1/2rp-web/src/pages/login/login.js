import React from 'react'
import {Link } from 'react-router-dom'
import './login.css'
function Login() {
        return(
            <div className='d-flex flex-row col-12'>
                <div className='d-flex col-7 fundocolor'>
                    <div>
                    <img className='marg' src={require('../../assets/powertech.png')} height='60%' width='80%'/>
                    </div>
                </div>
                <div className='text-light height fundoback col-5 flex-column justify-content'>
                    <div class='row mt-5'>
                        <div class="row mt-5 offset-1">
                            <label class="mt-5 offset-1" for="nome">Usuario</label>
                            <div class="input-group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-person svg" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                <input type="text" name="username" class="input" placeholder='Email/Usuario' autoComplete='off'></input>
                                <p Class="error username-error"></p>
                            </div>

                        </div>
                        <div class="row mt-5 offset-1">
                            <label class="mt-1 offset-1"for="password">Senha</label>
                            <div class="input-group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-lock svg" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                </svg>
                                <input type="password" name="password" class="input" placeholder='Senha' autoComplete='off'></input>
                                <p class="error password-error"></p>
                            </div>  
                        </div>
                    </div>
                    <div className='tpm'>
                        <Link to='/dashboard'>
                            <button onClick={Function()}className='fundo offset-2 mt-5 input'> Logar </button>
                        </Link>
                    </div>
                </div>    
            </div>
            )
    }

export default Login