import React, {Component} from 'react';
import firebase from "../../firebase";


class Calculator extends Component {
    submit = () => {
        firebase.firestore().collection('sssss').add({
            title: 'rubuk cub',
            time_second: 45
        })
    }

    render() {
        return (
            <div style={{marginTop: 200}}>
                <h1>Calculator</h1>
                <form method="POST" onSubmit={this.submit}>
                    <input type="file" name="f"/>
                    <button type="submit">Отправить</button>
                </form>
                <button onClick={this.submit}>sdsdsd</button>
            </div>
        );
    }
}

export default Calculator;