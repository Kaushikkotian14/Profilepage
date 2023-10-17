import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
`;

const ContactMeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    
`;

const ContactMeLabel = styled.label`
    margin-top: 10px;
`;

const ContactMeInput = styled.input`
    margin-left: 10px;
`;

const ContactMeTextarea = styled.textarea`
    margin-left: 10px;
`;

const ContactMeButton = styled.button`
    margin-top: 20px;
`;

function Contactme() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        setSubmitted(true);
    };

    return (
        <ContactMeContainer>
            
            {submitted ? (
                <div><h2> Your message has been successfully submitted!</h2>
                   <div align ="center">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Message: {message}</p>
                    </div> 

                </div>
            ) : (
                <ContactMeForm onSubmit={handleSubmit}>
                    <ContactMeLabel>
                        Name:
                        <ContactMeInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </ContactMeLabel>
                    <br/>
                    <ContactMeLabel>
                        Email:
                        <ContactMeInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ContactMeLabel>
                    <br/>
                    <ContactMeLabel>
                        Message:
                        <ContactMeTextarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeButton type="submit">Submit</ContactMeButton>
                </ContactMeForm>
            )}
        </ContactMeContainer>
    );
}

export default Contactme;