import React, { Component, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import './Home.css';
import styled from 'styled-components'
import Calc from './calc/Calc'
import first from '../img/first.png'

// export default class Home extends Component(
//     HandleChange() {
//         window.location.href = '/calc'
//     }
// )



export default function Home () {
    const HandleChange = () => {
        window.location.href = '/calc'
    }

    return (
        <div className='parent-div' style={{position: 'relative'}} >
            <div className='background'></div>
            <div className='textarea'>
                     <h1 className='Vy' >Volt Yakutia</h1>
                    <h4 className='Za'>Мы устанавливаем все виды проводки электричества. Можешь подсчитать примерную цену всех затрат на нашем онлайн-калькуляторе. Он высчитает тебе примерную цену затрат на материал и наши услуги электрика.</h4>
                    <Button variant="primary" size="lg" onClick={HandleChange} >ПОСЧИТАТЬ</Button>
            </div>
                    
        </div>
     
        
    )
}



