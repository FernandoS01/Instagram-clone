import './styles.css'
import { useState } from 'react'
import 'react-dom'
export function Aside(){
    const interval:number = 3000
    const colors:string[] = ['Red','Green','Blue']
    const content = document.querySelector('.content')

    return (
        <>
        <div className="aside">
            <div className='content'></div>  
        </div>
        </>
    )
}