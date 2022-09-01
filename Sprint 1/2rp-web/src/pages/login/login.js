import {Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <span>Isso é um Login</span>    
            <button><Link to='/dashboard'> Entrar </Link></button>
        </div>

    )
 }

export default Login