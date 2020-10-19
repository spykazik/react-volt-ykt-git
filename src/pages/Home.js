import React, { Component, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import './Home.css';
import styled from 'styled-components'

import first from '../img/first.png'



export default class About extends Component {
    render() {
        return (
            <div className='parent-div' style={{position: 'relative'}} >
                <div className='background'></div>
                <div className='textarea'>
                        <h1 className='Vy' >Volt Yakutia</h1>
                        <h4 className='Za'>Мы устанавливаем все виды проводки электричества. Можешь подсчитать примерную цену всех затрат на нашем онлайн-калькулторе. Он высчитает тебе примерную цену затрат на материал и наши услуги электрика.</h4>
                        <Button variant="primary" size="lg">ПОСЧИТАТЬ</Button>
                </div>
                        
            </div>
         
            
        )
    }
}



