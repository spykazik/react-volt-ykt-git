import React, { Component, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Jumbotron, Container } from 'react-bootstrap';

export default class Calc extends Component {
    goCalc = () => {
        window.location.href = '/calc/Calculator'
    }
    goEditor = () => {
        window.location.href = '/calc/Editor'
    }
    render() {
        return (
            <div className='parent-div calc' style={{marginTop: 200, position: 'relative'}} >
                <div className='Calculator ' >
                    <h1 className='cz'>Калькулятор</h1>
                    <h4 className='calc-text'>asdasda sdasdasdddddddd sds dsdsdsd sdsdsda asd sd sf sf a sdas dfd a sds d</h4>
                    <Button variant='primary' size='lg' onClick={this.goCalc} className=''>Начать</Button>
                </div>
                <div className='Editor ' >
                    <h1 className='cz'>Графический редактор</h1>
                    <h4 className='calc-text'>asdasdasdas dasdddddddd sds dsds dsdsdsdsda asd sd sf sf a sdas dfd a sds d</h4>
                    <Button variant='primary' size='lg' onClick={this.goEditor} className=''>Начать</Button>
                </div>
            </div>
         
            
        )
    }
}
