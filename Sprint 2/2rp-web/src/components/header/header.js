import './header.css'

import React from 'react'

function Header(props) {

    return (
        <>
            <div className='bg-title'>
                <span className='title'>{props.nome}</span>
            </div>
        </>
    );
}

export default Header