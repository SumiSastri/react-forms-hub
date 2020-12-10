import React, { Component } from 'react'
import Modal from 'react-modal'

export class PopUpModal extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
        }

        this.initialState = this.state;
        this.openModal = this.openModal.bind(this);
    }

    openModal = () => {
        console.log("this is:", this);
        this.setState((state) => ({
            // set state to the opposite of false which is true
            modalIsOpen: !state.modalIsOpen,
        }));
        console.log('openmodal:', this.state)
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
                    <div>
                        <h1> Place holder for modal content</h1>
                    </div>
                    <br></br>
                    <p onClick={() => this.openModal(false)}>x</p>
                </Modal>
            </section>
        )
    }
}

export default PopUpModal
