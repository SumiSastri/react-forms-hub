import React, { Component } from 'react'

import InputText from './InputText'
import InputNumber from './InputNumber'
import InputPassword from './InputPassword'
import SubmitBtn from '../../components/animated-buttons/SubmitBtn'

export class FormInputs extends Component {
    constructor(props) {
        super(props);

        this.state = {

            inputNumber: 0,
            inputPassword: '',
            inputText: '',
        }

        this.initialState = this.state;
    }

    updateFormInputs = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    };


    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

    }

    handleFormSubmit = (event) => {
        alert(`submitted text: ${this.state.inputText} number: ${this.state.inputNumber} password: number: ${this.state.inputPassword}`)
        event.preventDefault();
        console.log(this.state)
    };

    // resetFields = () => {
    //     this.setState(this.initialState);
    // }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <InputText
                    handleInputSubmit={this.handleInputSubmit}
                    updateFormInputs={this.updateFormInputs}
                />
                <InputNumber
                    handleInputSubmit={this.handleInputSubmit}
                    updateFormInputs={this.updateFormInputs}
                />
                <InputPassword
                    handleInputSubmit={this.handleInputSubmit}
                    updateFormInputs={this.updateFormInputs}
                />
                <section>
                    <SubmitBtn onClick={this.handleFormSubmit} />
                    {/* <button onClick={this.resetFields}>Reset</button> */}
                </section>
            </form>
        )
    }
}

export default FormInputs
