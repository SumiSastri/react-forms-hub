import React, { Component } from 'react'
import ReactModal from 'react-modal';

import { InputField } from '../input-fields/InputField'
import { ModalContainer } from './ModalContainer'
import { ButtonComponent } from '../buttons/ButtonComponent'

ReactModal.setAppElement('body');
export class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: '',
            modalIsOpen: false,
        }

        this.initialState = this.state;
    }

    updateFormInputs = (key, value) => {
        if (key === 'userName' || key === 'phoneNumber' || key === 'password') {
            this.setState({ error: null, [key]: value }, () => {
                this.setState({ userName: this.state.userName, password: this.state.password });
            });
        } else { this.setState({ error: null, [key]: value }); }
    }

    openModal = () => {
        console.log("this is:", this);
        this.setState((state) => ({
            // set state to the opposite of false which is true
            modalIsOpen: !state.modalIsOpen,
        }));
        console.log('openmodal:', this.state)
    };

    postFormData = () => {
        this.setState({ error: null });
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            params: {
            userName: this.state.userName,
            userPassword: this.state.password,
               
            },
        }).then(({ response }) => {
            if (200 <= response <= 299) {
                this.setState(this.initialState);
            } 
        }).catch( e => this.setState({ error: e }) );
    }

    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`Your details have been submitted for registration`)
    // }; this submit does not send the form to a back-end database

    render() {
        return (
            <section>
                <ButtonComponent
                    className='btn-5'
                    datatestid='btn-login-reg'
                    label='Login/Register'
                    name='btn-login-reg' 
                    onClick={() => this.openModal()}                   
                    type='button'
                />

                <ModalContainer 
                isOpen={this.state.modalIsOpen}
                disableCloseOnOverlay={false}
                closeOnRequest={() => this.openModal(false)}
            
                          
             

children={<div>

                    <form  onSubmit={() => (this.postFormData)} >
                        <InputField
                            className='inpt-1s'
                            datatestid='usr-name'
                            label='User Name'
                            name='user name'
                            onChange={event => this.updateFormInputs('userName', event.target.value)}
                            placeholder='Your email-id is your username'
                            required={false}
                            type='text'
                            value={this.state.userName}
                        />

                        <InputField
                            className='inpt-3s'
                            datatestid='password'
                            label='Password'
                            name='password'
                            onChange={event => this.updateFormInputs('password', event.target.value)}
                            placeholder='Use a mix of numbers, letters, symbols'
                            required={true}
                            type='password'
                            value={this.state.password}

                        />
                        <div><p>As a new user you will receive a confirmation email to authenticate access. Please provide a valid email and check your inbox and spam mailbox. The link is valid for 48 hours only to protect your personal data and prevent unauthorised site access. Please read our data & cookie policy before you authenticate your email id.</p></div>
                        <section>
                            <ButtonComponent
                                className='button-one'
                                datatestid='btn-login-reg-submit'
                                name='btn-login-reg-submit'
                                onSubmit={() => (this.postFormData)}   
                                label='Submit'
                                type='submit'
                            />
                        </section>
                    </form>
                    <br></br>
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

export default LoginModal
