import React, {Component} from 'react';

class Calculator extends Component {
    submit = () => {
        alert('sdsdsd')
    }
    render() {
        return (
            <div style={{marginTop: 200}}>
                <h1>Calculator</h1>
                <form method="POST" onSubmit={this.submit}>
                    <input type="file" name="f"/>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        );
    }
}

export default Calculator;