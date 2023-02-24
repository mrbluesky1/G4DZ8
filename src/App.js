import React from "react";

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ""
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
    }

    HandleChange(event) {
        this.setState({value: event.target.value})
    }

    HandleSubmit(event) {
        alert("Ваш логин: " + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>
                    Введите логин:
                    <label>
                        <input className='input1' type="text" value={this.state.value} onChange={this.HandleChange}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default FormLogin