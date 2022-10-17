import './header.css'

import React from 'react'
import { headerProp } from '../../interface/header-prop';

export default function Header(props: headerProp) {

    return (
        <>
            <div className='bg-title'>
                <span className='title'>{props.nome}</span>
            </div>
        </>
    );
}
