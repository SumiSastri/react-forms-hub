import React, { Component } from 'react'

import { ModalContainer } from '../modals/ModalContainer'
import { ButtonComponent } from '../buttons/ButtonComponent'
import { InputField } from '../input-fields/InputField'

export class FeedbackModal extends Component {
    constructor() {
        super();
        this.state = {
            commentBox: '',
            modalIsOpen: false,
            disableCloseOnOverlay: true,
        }

        this.initialState = this.state;
        this.openModal = this.openModal.bind(this);
        this.updateCommentInputs = this.updateCommentInputs.bind(this);
    }

    openModal = () => {
        console.log("this is:", this);
        this.setState((state) => ({
            // set state to the opposite of false which is true
            modalIsOpen: !state.modalIsOpen,
        }));
        console.log('openmodal:', this.state)
    };

    updateCommentInputs = (key, value) => {
        if (key === 'commentBox') {
            this.setState({ error: null, [key]: value }, () => {
                this.setState({ commentBox: this.state.commentBox });
            });
        } else { this.setState({ error: null, [key]: value }); }
    }

    handleCommentsSubmit = (event) => {
        event.preventDefault();
        // alert(`Your comments are appreciated we will get back to you soon`)
    };

    render() {
        return (
            <section>
                <ButtonComponent
                    className='button-one'
                    datatestid='btn-opn-commentBx'
                    label='Click to open'
                    name='btn-opn-commentBx'
                    onClick={() => this.openModal()}
                    type='button' />

                <ModalContainer isOpen={this.state.modalIsOpen}
                    disableCloseOnOverlay={false}
                    closeOnRequest={() => this.openModal(false)}
                    children={<div>
                        <form  onSubmit={this.handleCommentSubmit}>
                        <InputField
                            className='inpt-1l'
                            datatestid='mdl-opn-commentBx'
                            label='Please leave your comments and feedback'
                            name='mdl-opn-commentBx'
                            onChange={event => this.updateCommentInputs('commentBox', event.target.value)}
                            onSubmit={this.handleCommentSubmit}
                            placeholder='Please type your comments here'
                            required='false'
                            type='text-box'
                            value={this.state.commentBox}
                        />
                        </form>
                        <ButtonComponent
                className='button-one'
                datatestid='mdl-login-reg-close' 
                name='mdl-login-reg-close' 
                onClick={() => this.openModal(false)}
                label='X'
                type='button'

             />
                    </div>}

                >
                   
                </ModalContainer>
            </section>
        )
    }
}

