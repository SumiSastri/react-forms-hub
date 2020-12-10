import React, { Component } from 'react'
import Modal from 'react-modal'

import InputText from '../input-fields/InputText'
import InputNumber from '../input-fields/InputNumber'
import InputPassword from '../input-fields/InputPassword'
import SubmitBtn from '../buttons/SubmitBtn'


export class InputsModal extends Component {
    constructor() {
        super();

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
        alert(` text: ${this.inputText} number: ${this.inputNumber} pass: ${this.inputPassword} `)
        event.preventDefault();
        console.log('submit:', this.state)
    };

    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}>Open Form Input Fields</button>
                <Modal isOpen={this.state.modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={() => this.modalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'grey'
                            },
                            content: {
                                backgroundColor: 'lightblue'
                            }

                        }
                    }
                >
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
                            <SubmitBtn onClick={this.handleFormSubmit} />
                        </section>
                    </form>
                    <br></br>
                    <p onClick={() => this.openModal(false)}>x</p>
                </Modal>
            </section>
        )
    }
}

export default InputsModal
