import React, { Component } from 'react'
import Modal from 'react-modal'

import InputText from './InputText'
import InputNumber from './InputNumber'
import InputPassword from './InputPassword'
import SubmitBtn from '../../components/buttons/SubmitBtn'


export class FormInputs extends Component {
    constructor(props) {
        super(props);

        this.state = {

            inputNumber: 0,
            inputPassword: '',
            inputText: '',
            modalIsOpen: false,
        }

        this.initialState = this.state;
        this.openModal = this.openModal.bind(this);
    }

    updateFormInputs = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log('updateforminput:', this.state)
    };
   
    openModal = () => {
        console.log("this is:", this);
        this.setState((state) => ({
            // set state to the opposite of false which is true
            modalIsOpen: !state.modalIsOpen,
        }));
        console.log('openmodal:', this.state)
    };


    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('submit:', this.state)
    };

    // resetFields = () => {
    //     this.setState(this.initialState);
    // }

    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}>Open Form Input Fields</button>
                <Modal isOpen={this.state.modalIsOpen}>
            <form onSubmit={this.handleFormSubmit}>
                        <InputText
                    updateFormInputs={this.updateFormInputs}
                />
                        <InputNumber
                    updateFormInputs={this.updateFormInputs}
                />
                        <InputPassword
                    updateFormInputs={this.updateFormInputs}
                />
                <section>
                            <SubmitBtn />
                </section>
            </form>
                    <br></br>
                    <p onClick={() => this.openModal(false)}>x</p>
                </Modal>
            </section>
        )
    }
}

export default FormInputs
